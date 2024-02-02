import { FeedbackList } from "./components/FeedbackList/FeedbackList";
import Sidebar from "./components/sidebar/Sidebar";

export default function Home() {
  return (
    <main className="flex text-xs">
      <Sidebar />
      <FeedbackList />
    </main>
  );
}
