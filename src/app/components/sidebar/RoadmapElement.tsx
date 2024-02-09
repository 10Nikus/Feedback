export default function RoadmapEleme({
  color,
  title,
  count,
}: Readonly<{ color: string; title: string; count: number }>) {
  return (
    <li className="flex justify-between ">
      <div className="flex items-center">
        <svg
          className="my-1 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
        >
          <circle cx="4" cy="4" r="4" fill={color}></circle>
        </svg>
        <h2>{title}</h2>
      </div>
      <p className="font-bold">{count}</p>
    </li>
  );
}
