"use client";

import { useDispatch, useSelector } from "react-redux";
import FeedbackListItem from "./FeedbackListItem";
import { setNumber } from "@/app/lib/features/slice/feedbuckNumberSlice";
import { useEffect } from "react";

export const FeedbackList = ({ feedback }: { feedback: any }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNumber(feedback.length));
  }, [feedback]);

  const filter = useSelector((state: any) => state.filterSlice.status);
  const sort = useSelector((state: any) => state.sortSlice.status);

  if (filter) {
    feedback = feedback.filter((f: any) => f.category === filter);
  }

  switch (sort) {
    case "Most UpVotes":
      feedback = feedback.sort(
        (a: any, b: any) => Number(b.upVotes) - Number(a.upVotes)
      );
      break;
    case "Least UpVotes":
      feedback = feedback.sort(
        (a: any, b: any) => Number(a.upVotes) - Number(b.upVotes)
      );
      break;
    case "Most Comments":
      feedback = feedback.sort(
        (a: any, b: any) => b.comments.length - a.comments.length
      );
      break;
    case "Least Comments":
      feedback = feedback.sort(
        (a: any, b: any) => a.comments.length - b.comments.length
      );
      break;
  }
  return (
    <div className="flex flex-col align-middle w-full items-center min-h-svh">
      {feedback.map((f: any) => (
        <FeedbackListItem key={f._id} feedback={f} />
      ))}
    </div>
  );
};
