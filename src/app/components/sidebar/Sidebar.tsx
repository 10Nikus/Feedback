import Link from "next/link";
import Button from "./Button";
import RoadmapElement from "./RoadmapElement";

export default function Sidebar() {
  return (
    <>
      <div>
        <h1>Frontend Mentor</h1>
        <h2>Feedback board</h2>
      </div>
      <div>
        <Button>All</Button>
        <Button>UI</Button>
        <Button>UX</Button>
        <Button>Enhancement</Button>
        <Button>Bug</Button>
        <Button>Feature</Button>
      </div>
      <div>
        <div className="fkex justify-between">
          <h1>Roadmap</h1>
          <Link href="/roadmap">view</Link>
        </div>
        <ul>
          <RoadmapElement color="blue" title="Planned" count={2} />
          <RoadmapElement color="green" title="In-Progress" count={3} />
          <RoadmapElement color="purple" title="Live" count={1} />
        </ul>
      </div>
    </>
  );
}
