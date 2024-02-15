import { FeedbackList } from "@/components/FeedbackList/FeedbackList";
import { FeedbackListMobile } from "@/components/FeedbackList/FeedbackListMobile";
import Header from "@/components/Header/Header";
import MobileSidebar from "@/components/sidebar/MobileSidebar";
import Sidebar from "@/components/sidebar/Sidebar";

export default async function Home() {
  return (
    <main className="flex flex-col min-h-svh md:flex-row bg-slate-100 p-0 sm:px-8 sm:py-4 md:px-10 md:py-6  lg:px-12 lg:py-6 xl:px-36 xl:py-20">
      <Sidebar />
      <MobileSidebar />
      <div className="w-full mx-0 ">
        <Header />
        <FeedbackList />
        <FeedbackListMobile />
      </div>
    </main>
  );
}
