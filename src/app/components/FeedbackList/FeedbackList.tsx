"use client";

import { useSelector } from "react-redux";
import FeedbackListItem from "./FeedbackListItem";
import { useEffect, useState } from "react";
import useFetch from "@/app/hooks/UseFetch";
import useFilter from "@/app/hooks/UseFilter";
import UseSort from "@/app/hooks/UseSort";

export const FeedbackList = () => {
  const { data } = useFetch(`api/posts/`);
  const [feedbacks, setFeedbacks] = useState<any>([]);

  const sortData = UseSort();
  const filterData = useFilter();

  const filter = useSelector((state: any) => state.filterSlice.status);
  const sort = useSelector((state: any) => state.sortSlice.status);

  useEffect(() => {
    async function makeData() {
      const filteredData = await filterData(data, filter, "category");
      const sortedData = await sortData(filteredData, sort);
      setFeedbacks(sortedData);
    }

    makeData();
  }, [data, filter, sort]);

  return (
    <div className="flex flex-col align-middle w-full items-center min-h-svh">
      {feedbacks &&
        feedbacks.map((f: any) => (
          <FeedbackListItem key={f._id} feedback={f} />
        ))}
    </div>
  );
};
