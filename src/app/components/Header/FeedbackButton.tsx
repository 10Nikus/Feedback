import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
export default function FeedbuckButton({
  link,
  title,
}: {
  link: string;
  title: string;
}) {
  const router = useRouter();
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 500, mass: 0.5 }}
      onClick={() => router.replace(link)}
      className="flex justify-center items-center text-xs lg:text-sm  bg-lilac text-white rounded-md px-4 py-2 gap-1 font-bold md:px-1"
    >
      {title}
    </motion.button>
  );
}
