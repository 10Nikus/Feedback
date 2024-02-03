"use client";

import { useState } from "react";
import DATA from "../../data.json";
import FeedbackListItem from "./FeedbackListItem";

const ListData = DATA["productRequests"];

export const FeedbackList = () => {
  const [filter, setFilter] = useState("all");

  const data =
    filter === "all"
      ? ListData
      : ListData.filter((item) => item.category === filter);

  return (
    <div className="flex flex-col align-middle w-full items-center">
      {data.map((feedback) => (
        <FeedbackListItem key={feedback.id} feedback={feedback} />
      ))}
    </div>
  );
};
