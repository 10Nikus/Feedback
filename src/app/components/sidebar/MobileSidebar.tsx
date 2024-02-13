"use client";

import useFetch from "@/app/hooks/UseFetch";
import useFilter from "@/app/hooks/UseFilter";
import { useEffect, useState } from "react";
import Button from "./SidebarButton";
import Link from "next/link";
import RoadmapElement from "./RoadmapElement";

export default function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const filterData = useFilter();
  const { data } = useFetch(`api/posts/`);
  const [feedbacks, setFeedbacks] = useState<any>([]);

  const [numData, setNumData] = useState<{
    PLANNED: any;
    INPROGRESS: any;
    LIVE: any;
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
      setNumData({ PLANNED, INPROGRESS, LIVE });
    }
  }, [feedbacks]);

  return (
    <>
      <div className="flex w-full justify-between xs:hidden bg-tabHeader text-white py-4 pl-4">
        <div>
          <h1>Frontend Mentor</h1>
          <h2>Feedback board</h2>
        </div>
        <button onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? (
            "Close"
          ) : (
            <svg width="20" height="17" xmlns="http://www.w3.org/2000/svg">
              <g fill="#FFF" fill-rule="evenodd">
                <path d="M0 0h20v3H0zM0 7h20v3H0zM0 14h20v3H0z" />
              </g>
            </svg>
          )}
        </button>
      </div>
      {isOpen && (
        <div className="absolute right-0 top-20 bg-white w-3/5 h-full">
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
