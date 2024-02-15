import { motion } from "framer-motion";

export default function UpvoteButton({
  children,
  rotation = "col",
}: {
  children: React.ReactNode;
  rotation: "row" | "col";
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      transition={{ type: "spring", stiffness: 500, mass: 0.5 }}
      className={`flex flex-${rotation} gap-1 justify-center items-center bg-slate-200 rounded-md px-4 ${
        rotation === "col" ? "h-16 w-12" : "h-8  w-18 my-4 px-0.5 py-0 md:px-2"
      } hover:bg-blue hover:text-slate-200`}
    >
      <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 6l4-4 4 4"
          stroke="black"
          strokeWidth="2"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
      <p>{children}</p>
    </motion.div>
  );
}
