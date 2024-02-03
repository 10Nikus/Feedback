import FeedbuckButton from "../components/Header/FeedbackButton";
import Navbar from "../components/Header/Navbar";

export default function Roadmap() {
  return (
    <main className="px-36 pt-20 bg-slate-100">
      <Navbar>
        <button>Go Back</button>

        <FeedbuckButton />
      </Navbar>
    </main>
  );
}
