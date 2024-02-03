import Link from "next/link";
import Button from "./SidebarButton";
import RoadmapElement from "./RoadmapElement";
export default function Sidebar() {
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
            className="text-lightGrey underline underline-offset-4"
          >
            view
          </Link>
        </div>
        <ul className="p-3">
          <RoadmapElement color="blue" title="Planned" count={2} />
          <RoadmapElement color="green" title="In-Progress" count={3} />
          <RoadmapElement color="purple" title="Live" count={1} />
        </ul>
      </div>
    </div>
  );
}
