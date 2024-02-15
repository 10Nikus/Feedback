import useFetch from "@/app/hooks/UseFetch";
import useFilter from "@/app/hooks/UseFilter";
import { useEffect, useState } from "react";
import RoadmapSkeleton from "../skeleton/RoadmapSkeleton";
import RoadmapEl from "./RoadmapList";
import { feedbackType } from "@/types/feedbackType";

export default function RoadmapDesc() {
  const filterData = useFilter();
  const { data, loading } = useFetch(`api/posts/`);
  const [feedbacks, setFeedbacks] = useState<Array<feedbackType>>([]);

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
    <div className="hidden sm:grid grid-cols-3 gap-2 lg:gap-10">
      {loading && (
        <>
          <RoadmapSkeleton />
          <RoadmapSkeleton />
          <RoadmapSkeleton />
        </>
      )}
      {data && (
        <>
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
        </>
      )}
    </div>
  );
}
