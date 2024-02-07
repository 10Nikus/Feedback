"use client";

import { FeedbackList } from "./components/FeedbackList/FeedbackList";
import Header from "./components/Header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { useGetFeedback } from "./hooks/UseGetFeedback";

export default async function Home() {
  const { feedback } = await useGetFeedback();

  return (
    <main className="flex bg-slate-100 px-36 py-20">
      <Sidebar />
      <div className="w-full mx-0">
        <Header />
        <FeedbackList feedback={feedback} />
      </div>
    </main>
  );
}
