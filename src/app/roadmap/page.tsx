"use client";

import { useDispatch } from "react-redux";
import FeedbuckButton from "../components/Header/FeedbackButton";
import GoBackBtn from "../components/Header/GoBackBtn";
import Navbar from "../components/Header/Navbar";
import RoadmapEl from "../components/Summary/RoadmapList";
import useFetch from "../hooks/UseFetch";
import UseFilter from "../hooks/UseFilter";
import { useEffect, useState } from "react";
import RoadmapSkeleton from "../components/skeleton/RoadmapSkeleton";
import BasicTabs from "../components/Summary/RoadmapMobile";
import RoadmapDesc from "../components/Summary/RoadmapDesc";

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
