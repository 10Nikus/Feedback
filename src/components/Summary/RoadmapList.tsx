import { feedbackType } from "@/types/feedbackType";
import RoadmapItem from "./RoadmapItem";

export default function RoadmapEl({
  title,
  description,
  data,
  color,
  colorHash,
}: {
  title: string;
  description: string;
  data: Array<feedbackType>;
  color: string;
  colorHash: string;
}) {
  return (
    <div>
      <div className="h-4 sm:h-9 pb-3">
        <h1 className="text-xs xs:text-xs sm:text-md font-bold text-left flex items-center">
          <span>
            <svg
              className="my-1 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
            >
              <circle cx="4" cy="4" r="4" fill={colorHash}></circle>
            </svg>
          </span>
          {title} ({data?.length})
        </h1>
        <p className="collapse sm:visible">{description}</p>
      </div>
      {data.map((event, index) => (
        <RoadmapItem
          key={index + title}
          title={title}
          color={color}
          event={event}
          hash={colorHash}
        />
      ))}
    </div>
  );
}
