import FeedbuckButton from "../components/Header/FeedbackButton";
import GoBackBtn from "../components/Header/GoBackBtn";
import Navbar from "../components/Header/Navbar";

export default function Roadmap() {
  return (
    <main className="px-36 pt-20 bg-slate-100 h-svh">
      <Navbar>
        <GoBackBtn color="white" />
        <FeedbuckButton title="+Add Feedback" link="/new" />
      </Navbar>
      <div className="flex w-full justify-between">
        <div>
          <div>
            <h1 className="font-bold text-left">Planned (x)</h1>
            <p>Odeas prioritized for research</p>
          </div>
        </div>
        <div>
          <div>
            <h1 className="font-bold text-left">In-Progress (x)</h1>
            <p>Feqatures currently being developed</p>
          </div>
        </div>
        <div>
          <div>
            <h1 className="font-bold text-left">Live(x)</h1>
            <p>Released features</p>
          </div>
        </div>
      </div>
    </main>
  );
}
