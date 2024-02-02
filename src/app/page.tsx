import { FeedbackList } from "./components/FeedbackList/FeedbackList";
import Sidebar from "./components/sidebar/Sidebar";

export default function Home() {
  return (
    <main className="grid grid-cols-2 ">
      <Sidebar />
      <FeedbackList />
    </main>
  );
}
