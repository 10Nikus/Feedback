import { FeedbackList } from "./components/FeedbackList/FeedbackList";
import Header from "./components/Header/Header";
import Sidebar from "./components/sidebar/Sidebar";

export default function Home() {
  return (
    <main className="flex bg-slate-100 px-28 pt-20">
      <Sidebar />
      <div className="w-full">
        <Header />
        <FeedbackList />
      </div>
    </main>
  );
}
