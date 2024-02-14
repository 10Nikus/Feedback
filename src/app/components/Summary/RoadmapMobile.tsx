import { useEffect, useState } from "react";
import useFilter from "@/app/hooks/UseFilter";
import useFetch from "@/app/hooks/UseFetch";
import RoadmapItem from "./RoadmapItem";

export default function BasicTabs() {
  const [value, setValue] = useState("Planned");
  const filterData = useFilter();
  const { data, loading } = useFetch(`api/posts/`);
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
    <div>
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
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
