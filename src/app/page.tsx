import { FeedbackList } from "./components/FeedbackList/FeedbackList";
import Header from "./components/Header/Header";
import Sidebar from "./components/sidebar/Sidebar";

export default async function Home() {
  return (
    <main className="flex flex-col min-h-svh md:flex-row bg-slate-100 px-8 py-4 md:px-10 md:py-6  lg:px-12 lg:py-6 xl:px-36 xl:py-20">
      <Sidebar />
      <div className="w-full mx-0 ">
        <Header />
        <FeedbackList />
      </div>
    </main>
  );
}
