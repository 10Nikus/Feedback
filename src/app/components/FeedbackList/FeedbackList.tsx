"use client";

import { useSelector } from "react-redux";
import FeedbackListItem from "./FeedbackListItem";

export const FeedbackList = ({ feedback }: { feedback: any }) => {
  const filter = useSelector((state: any) => state.filterSlice.status);

  if (filter !== "all") {
    feedback = feedback.filter((f: any) => f.category === filter);
  }

  return (
    <div className="flex flex-col align-middle w-full items-center">
      {feedback.map((f: any) => (
        <FeedbackListItem key={f._id} feedback={f} />
      ))}
    </div>
  );
};
