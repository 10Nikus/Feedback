"use client";

import { setFilter } from "@/app/lib/features/slice/filterSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function Button({ children }: Readonly<{ children: string }>) {
  const filter = useSelector((state: any) => state.filterSlice.status);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (filter !== children.toLowerCase() && children !== "All") {
      dispatch(setFilter(children.toLowerCase()));
    } else {
      dispatch(setFilter(""));
    }
  };

  return (
    <button
      className={`${
        filter === children.toLowerCase()
          ? "bg-slate-200 text-blue"
          : "bg-blue text-slate-200"
      } rounded-md px-2 py-1 text-xs font-bold`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
