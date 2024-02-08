"use client";

import FeedbuckButton from "../components/Header/FeedbackButton";
import GoBackBtn from "../components/Header/GoBackBtn";
import Navbar from "../components/Header/Navbar";
import RoadmapEl from "../components/Summary/RoadmapList";
import useFetch from "../hooks/UseFetch";
import UseFilter from "../hooks/UseFilter";
import { useEffect, useState } from "react";

export default function Roadmap() {
  const filterData = UseFilter();
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
    if (data) {
      const PLANNED = filterData(feedbacks, "planned", "status");
      const INPROGRESS = filterData(feedbacks, "in-progress", "status");
      const LIVE = filterData(feedbacks, "live", "status");
      setNumData({ PLANNED, INPROGRESS, LIVE });
    }
  }, [data]);
  return (
    <main className="px-36 pt-20 bg-slate-100">
      <Navbar>
        <GoBackBtn color="white" />
        <FeedbuckButton title="+Add Feedback" link="/new" />
      </Navbar>
      <div className="grid grid-cols-3 gap-10">
        <RoadmapEl
          title="Planned"
          description="Ideas prioritized for research"
          data={numData.PLANNED}
          color="border-orange-600"
          colorHash="#FF9800"
        />
        <RoadmapEl
          title="In-Progress"
          description="Features currently being debeloped"
          data={numData.INPROGRESS}
          color="border-violet-600"
          colorHash="#9C27B0"
        />
        <RoadmapEl
          title="Live"
          description="Released features"
          data={numData.LIVE}
          color="border-green-600"
          colorHash="#4CAF50"
        />
      </div>
    </main>
  );
}
