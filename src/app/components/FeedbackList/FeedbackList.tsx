"use client";

import { useState } from "react";
import DATA from "@/app/data.json";
import FeedbackListItem from "./FeedbackListItem";

const ListData = DATA["productRequests"];

export const FeedbackList = ({ posts }: any) => {
  return (
    <div className="flex flex-col align-middle w-full items-center">
      {posts.map((feedback: any) => (
        <FeedbackListItem key={feedback._id} feedback={feedback} />
      ))}
    </div>
  );
};
