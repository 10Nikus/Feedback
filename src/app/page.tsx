import { FeedbackList } from "./components/FeedbackList/FeedbackList";
import Header from "./components/Header/Header";
import Sidebar from "./components/sidebar/Sidebar";

export default function Home() {
  return (
    <main className="flex bg-lightPastel">
      <Sidebar />
      <div>
        <Header />
        <FeedbackList />
      </div>
    </main>
  );
}
