import FeedbuckButton from "../components/Header/FeedbackButton";
import GoBackBtn from "../components/Header/GoBackBtn";
import Navbar from "../components/Header/Navbar";
import DATA from "../data.json";
import RoadmapEl from "../components/Summary/RoadmapList";

const ListData = DATA["productRequests"];

export default function Roadmap() {
  const PLANNED = ListData.filter((item: any) => item.status === "planned");
  const INPROGRESS = ListData.filter(
    (item: any) => item.status === "in-progress"
  );
  const LIVE = ListData.filter((item: any) => item.status === "live");

  return (
    <main className="px-36 pt-20 bg-slate-100">
      <Navbar>
        <GoBackBtn color="white" />
        <FeedbuckButton title="+Add Feedback" link="/new" />
      </Navbar>
      <div className="grid grid-cols-3 gap-10">
        <RoadmapEl
          title="Planned"
          description="Ideas prioritized for research"
          data={PLANNED}
          color="orange"
          colorHash="#FF9800"
        />
        <RoadmapEl
          title="In-Progress"
          description="Features currently being debeloped"
          data={INPROGRESS}
          color="violet"
          colorHash="#9C27B0"
        />
        <RoadmapEl
          title="Live"
          description="Released features"
          data={LIVE}
          color="green"
          colorHash="#4CAF50"
        />
      </div>
    </main>
  );
}
