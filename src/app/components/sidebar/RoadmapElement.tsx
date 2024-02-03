export default function RoadmapEleme({
  color,
  title,
  count,
}: Readonly<{ color: string; title: string; count: number }>) {
  return (
    <li className="flex justify-between ">
      <div className="flex">
        <h2>{title}</h2>
      </div>
      <p className="font-bold">{count}</p>
    </li>
  );
}
