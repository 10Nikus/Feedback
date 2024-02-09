"use client";

import { useDispatch, useSelector } from "react-redux";
import FeedbackListItem from "./FeedbackListItem";
import { useEffect, useState } from "react";
import useFetch from "@/app/hooks/UseFetch";
import useFilter from "@/app/hooks/UseFilter";
import UseSort from "@/app/hooks/UseSort";
import { useRouter } from "next/navigation";
import { setNumber } from "@/app/lib/features/slice/feedbuckNumberSlice";

export const FeedbackList = () => {
  const { data } = useFetch(`api/posts/`);
  const [feedbacks, setFeedbacks] = useState<any>([]);

  const dispatch = useDispatch();
  const router = useRouter();
  const sortData = UseSort();
  const filterData = useFilter();

  const filter = useSelector((state: any) => state.filterSlice.status);
  const sort = useSelector((state: any) => state.sortSlice.status);

  useEffect(() => {
    function makeData() {
      const filteredData = filterData(data, filter, "category");
      const sortedData = sortData(filteredData, sort);
      setFeedbacks(sortedData);
      router.refresh();
    }
    makeData();
  }, [data, filter, sort]);

  useEffect(() => {
    if (feedbacks) {
      dispatch(setNumber(feedbacks.length));
    }
  }, [feedbacks]);

  return (
    <div className="flex flex-col align-middle w-full items-center min-h-svh">
      {feedbacks &&
        feedbacks.map((f: any) => (
          <FeedbackListItem key={f._id} feedback={f} />
        ))}
    </div>
  );
};
