"use client";

import FeedbuckButton from "@/components/Header/FeedbackButton";
import GoBackBtn from "@/components/Header/GoBackBtn";
import Navbar from "@/components/Header/Navbar";
import BasicTabs from "@/components/Summary/RoadmapMobile";
import RoadmapDesc from "@/components/Summary/RoadmapDesc";

export default function Roadmap() {
  return (
    <>
      <main className="min-h-svh  p-0 sm:px-8 lg:px-20  sm:pt-10 lg:pt-20   bg-slate-100">
        <Navbar>
          <GoBackBtn color="white" />
          <FeedbuckButton title="+Add Feedback" link="/new" />
        </Navbar>
        <BasicTabs />
        <RoadmapDesc />
      </main>
    </>
  );
}
