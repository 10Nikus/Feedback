"use client";

import { useDispatch, useSelector } from "react-redux";
import FeedbackListItem from "./FeedbackListItem";
import { setNumber } from "@/app/lib/features/slice/feedbuckNumberSlice";
import { useEffect, useState } from "react";
import useFetch from "@/app/hooks/UseFetch";
import useFilter from "@/app/hooks/UseFilter";

export const FeedbackList = () => {
  const { data } = useFetch(`api/posts/`);
  const [feedbacks, setFeedbacks] = useState<any>([]);

  const filterData = useFilter();
  const filter = useSelector((state: any) => state.filter);

  const dispatch = useDispatch();
  useEffect(() => {
    setFeedbacks(data);
  }, [data]);

  useEffect(() => {
    if (feedbacks) {
      dispatch(setNumber(feedbacks.length));
    }
  }, [feedbacks]);

  // if (data) {
  //   data.feedback = data.feedback.filter((f: any) => f.category === filter);
  // }
  // if (data) {
  //   const filteredData = filterData(data?.feedback, filter, "category");
  //   console.log(filterData(data?.feedback, filter, "category"));
  // }

  // useEffect(() => {
  //   const filteredData = filterData(data?.feedback, filter, "category");
  //   console.log(filteredData);
  // }, [data, filter]);

  // switch (sort) {
  //   case "Most UpVotes":
  //     feedback = feedback.sort(
  //       (a: any, b: any) => Number(b.upVotes) - Number(a.upVotes)
  //     );
  //     break;
  //   case "Least UpVotes":
  //     feedback = feedback.sort(
  //       (a: any, b: any) => Number(a.upVotes) - Number(b.upVotes)
  //     );
  //     break;
  //   case "Most Comments":
  //     feedback = feedback.sort(
  //       (a: any, b: any) => b.comments.length - a.comments.length
  //     );
  //     break;
  //   case "Least Comments":
  //     feedback = feedback.sort(
  //       (a: any, b: any) => a.comments.length - b.comments.length
  //     );
  //     break;
  // }
  return (
    <div className="flex flex-col align-middle w-full items-center min-h-svh">
      {feedbacks &&
        feedbacks.map((f: any) => (
          <FeedbackListItem key={f._id} feedback={f} />
        ))}
    </div>
  );
};
