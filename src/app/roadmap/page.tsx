import FeedbuckButton from "../components/Header/FeedbackButton";
import GoBackBtn from "../components/Header/GoBackBtn";
import Navbar from "../components/Header/Navbar";

export default function Roadmap() {
  return (
    <main className="px-36 pt-20 bg-slate-100 h-svh">
      <Navbar>
        <GoBackBtn color="white" />
        <FeedbuckButton />
      </Navbar>
      <div className="flex w-full">
        <div className="bg-white">First</div>
        <div className="bg-white">Secend</div>
        <div className="bg-white">Third</div>
      </div>
    </main>
  );
}
