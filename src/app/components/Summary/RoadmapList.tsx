import RoadmapItem from "./RoadmapItem";

export default function RoadmapEl({
  title,
  description,
  data,
  color,
}: {
  title: string;
  description: string;
  data: object[];
  color: string;
}) {
  return (
    <div>
      <div>
        <h1 className="font-bold text-left">
          {title} ({data?.length})
        </h1>
        <p>{description}</p>
      </div>
      {data.map((event, index) => (
        <RoadmapItem
          key={index + title}
          title={title}
          color={color}
          event={event}
        />
      ))}
    </div>
  );
}
