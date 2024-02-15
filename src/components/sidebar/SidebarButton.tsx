"use client";

import { setFilter } from "@/lib/features/slice/filterSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

export default function Button({ children }: { children: string }) {
  const filter = useSelector((state: any) => state.filterSlice.status);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (filter !== children.toLowerCase()) {
      dispatch(setFilter(children.toLowerCase()));
    } else {
      dispatch(setFilter("all"));
    }
  };

  return (
    <motion.button
      className={`${
        filter === children.toLowerCase()
          ? "bg-slate-200 text-blue"
          : "bg-blue text-slate-200"
      } rounded-md px-2 py-1 text-xs font-bold`}
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 500, mass: 0.5 }}
    >
      {children}
    </motion.button>
  );
}
