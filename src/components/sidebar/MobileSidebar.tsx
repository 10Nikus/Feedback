"use client";

import useFetch from "@/hooks/UseFetch";
import useFilter from "@/hooks/UseFilter";
import { useEffect, useState } from "react";
import Button from "./SidebarButton";
import Link from "next/link";
import RoadmapElement from "./RoadmapElement";
import { feedbackType } from "@/types/feedbackType";

export default function MobileSidebar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { data } = useFetch(`api/posts/`);
  const [feedbacks, setFeedbacks] = useState<Array<feedbackType> | null>([]);

  const filterData = useFilter();

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
    data && setFeedbacks(data);
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
    <>
      <div
        className={`flex w-full justify-between xs:hidden bg-tabHeader text-white py-2 pl-4`}
      >
        <div>
          <h1>Frontend Mentor</h1>
          <h2>Feedback board</h2>
        </div>
        <button className="pr-2" onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? (
            <svg width="18" height="17" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z"
                fill="#FFF"
                fillRule="evenodd"
              />
            </svg>
          ) : (
            <svg width="20" height="17" xmlns="http://www.w3.org/2000/svg">
              <g fill="#FFF" fillRule="evenodd">
                <path d="M0 0h20v3H0zM0 7h20v3H0zM0 14h20v3H0z" />
              </g>
            </svg>
          )}
        </button>
      </div>
      {isOpen && (
        <div className="absolute sm:hidden right-0 top-16 bg-slate-100 w-3/4 h-full py-6 px-8">
          <div className="flex flex-col gap-3 bg-white rounded-md mb-4 p-5">
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
                color="#FF9800"
                title="Planned"
                count={numData.PLANNED.length}
              />
              <RoadmapElement
                color="#9C27B0"
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
      )}
    </>
  );
}
