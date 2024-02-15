import { useEffect, useState } from "react";
import useFilter from "@/app/hooks/UseFilter";
import useFetch from "@/app/hooks/UseFetch";
import RoadmapItem from "./RoadmapItem";
import { feedbackType } from "@/types/feedbackType";

export default function BasicTabs() {
  const [value, setValue] = useState("Planned");
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
    <div className="flex flex-col sm:hidden">
      <div className="flex  justify-center  border-b-2">
        <button
          className={`${
            value === "Planned" && "font-bold border-b-4 border-indigo-500 "
          } py-3 px-3`}
          onClick={() => {
            setValue("Planned");
          }}
        >
          Planned({numData && numData.PLANNED.length})
        </button>
        <button
          className={`${
            value === "InProgress" && "font-bold border-b-4 border-yellow-500 "
          } px-3`}
          onClick={() => {
            setValue("InProgress");
          }}
        >
          In-Progress({numData && numData.INPROGRESS.length})
        </button>
        <button
          className={`${
            value === "Live" && "font-bold border-b-4 border-green-500"
          } px-3`}
          onClick={() => {
            setValue("Live");
          }}
        >
          Live({numData && numData.LIVE.length})
        </button>
      </div>
      <div>
        {value === "Planned" && (
          <div className="p-5">
            <h1 className="font-bold">
              Planned ({numData && numData.PLANNED.length})
            </h1>
            <p>Ideas prioritized for research</p>
            {numData.PLANNED.map((event: any) => (
              <RoadmapItem
                key={event._id}
                color="border-indigo-500"
                event={event}
                title="Planned"
                hash="#3F51B5"
              />
            ))}
          </div>
        )}
        {value === "InProgress" && (
          <div className="p-5">
            <h1 className="font-bold">
              In-Progress ({numData && numData.INPROGRESS.length})
            </h1>
            <p>Features currently being developed</p>
            {numData.INPROGRESS.map((event: any) => (
              <RoadmapItem
                key={event._id}
                color="border-yellow-500"
                event={event}
                title="In-Progress"
                hash="#FFEB3B"
              />
            ))}
          </div>
        )}
        {value === "Live" && (
          <div className="p-5">
            <h1 className="font-bold">
              Live ({numData && numData.LIVE.length})
            </h1>
            <p>Released features</p>
            {numData.LIVE.map((event: any) => (
              <RoadmapItem
                key={event._id}
                color="border-green-500"
                event={event}
                title="Live"
                hash="#4CAF50"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
