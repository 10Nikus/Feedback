import Link from "next/link";
import Button from "./SidebarButton";
import RoadmapElement from "./RoadmapElement";

export default function Sidebar() {
  return (
    <div className="flex flex-col mx-3 gap-5">
      <div>
        <h1>Frontend Mentor</h1>
        <h2>Feedback board</h2>
      </div>
      <div className="flex gap-2 flex-wrap bg-white p-2 rounded-md">
        <Button>All</Button>
        <Button>UI</Button>
        <Button>UX</Button>
        <Button>Enhancement</Button>
        <Button>Bug</Button>
        <Button>Feature</Button>
      </div>
      <div className="bg-white p-2 rounded-md">
        <div className="flex justify-between">
          <h1 className="font-bold">Roadmap</h1>
          <Link
            href="/roadmap"
            className="text-lightGrey underline underline-offset-4"
          >
            view
          </Link>
        </div>
        <ul>
          <RoadmapElement color="blue" title="Planned" count={2} />
          <RoadmapElement color="green" title="In-Progress" count={3} />
          <RoadmapElement color="purple" title="Live" count={1} />
        </ul>
      </div>
    </div>
  );
}
