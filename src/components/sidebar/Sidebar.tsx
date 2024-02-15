"use client";

import Link from "next/link";
import Button from "./SidebarButton";
import RoadmapElement from "./RoadmapElement";
import useFetch from "@/app/hooks/UseFetch";
import { useEffect, useState } from "react";
import UseFilter from "@/app/hooks/UseFilter";
import { feedbackType } from "@/types/feedbackType";

export default function Roadmap() {
  const filterData = UseFilter();
  const { data } = useFetch(`api/posts/`);
  const [feedbacks, setFeedbacks] = useState<Array<feedbackType> | null>([]);

  const [numData, setNumData] = useState<{
    PLANNED: Array<feedbackType>;
    INPROGRESS: Array<feedbackType>;
    LIVE: Array<feedbackType>;
  }>({
    PLANNED: [],
    INPROGRESS: [],
    LIVE: [],
  });

  useEffect(() => {
    setFeedbacks(data);
  }, [data]);

  useEffect(() => {
    if (feedbacks) {
      const PLANNED = filterData(feedbacks, "planned", "status");
      const INPROGRESS = filterData(feedbacks, "in-progress", "status");
      const LIVE = filterData(feedbacks, "live", "status");
      if (PLANNED && INPROGRESS && LIVE) {
        setNumData({ PLANNED, INPROGRESS, LIVE });
      }
    }
  }, [feedbacks]);

  return (
    <div className="hidden xs:flex flex-row justify-between  md:justify-normal md:flex-col md:mx-6 my-3 md:gap-5 w-full md:w-72">
      <div className="bg-descHeader  text-white pl-4 pb-4 pt-6 md:pt-12 lg:pt-14 pr-10">
        <h1 className="font-bold">Frontend Mentor</h1>
        <h2>Feedback board</h2>
      </div>
      <div className="flex flex-col gap-3 bg-white rounded-md  p-5">
        <div className="flex gap-2">
          <Button>All</Button>
          <Button>UI</Button>
          <Button>UX</Button>
        </div>
        <div className="flex gap-2">
          <Button>Enhancement</Button>
          <Button>Bug</Button>
        </div>
        <Button>Feature</Button>
      </div>
      <div className="bg-white p-2 rounded-md">
        <div className="flex justify-between">
          <h1 className="font-bold">Roadmap</h1>
          <Link
            href="/roadmap"
            className="text-blue underline underline-offset-4"
          >
            view
          </Link>
        </div>
        <ul className="p-3">
          <RoadmapElement
            color="#3F51B5"
            title="Planned"
            count={numData.PLANNED.length}
          />
          <RoadmapElement
            color="#FFEB3B"
            title="InProgress"
            count={numData.INPROGRESS.length}
          />
          <RoadmapElement
            color="#4CAF50"
            title="Live"
            count={numData.LIVE.length}
          />
        </ul>
      </div>
    </div>
  );
}
