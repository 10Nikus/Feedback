import Link from "next/link";
import Button from "./SidebarButton";
import RoadmapElement from "./RoadmapElement";
import DATA from "../../data.json";

const ListData = DATA["productRequests"];

export default function Roadmap() {
  const PLANNED = ListData.filter((item: any) => item.status === "planned");
  const INPROGRESS = ListData.filter(
    (item: any) => item.status === "in-progress"
  );
  const LIVE = ListData.filter((item: any) => item.status === "live");
  return (
    <div className="flex flex-col mx-6 my-3 gap-5 w-80 ">
      <div className="bg-descHeader text-white pl-4 pb-4 pt-16 pr-10">
        <h1 className="font-bold">Frontend Mentor</h1>
        <h2>Feedback board</h2>
      </div>
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
            count={PLANNED.length}
          />
          <RoadmapElement
            color="#9C27B0"
            title="In-Progress"
            count={INPROGRESS.length}
          />
          <RoadmapElement color="#4CAF50" title="Live" count={LIVE.length} />
        </ul>
      </div>
    </div>
  );
}
