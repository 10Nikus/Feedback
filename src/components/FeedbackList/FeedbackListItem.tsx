import Link from "next/link";
import UpvoteButton from "./UpvoteButton";
import CommentAmount from "./CommentAmount";
import { motion } from "framer-motion";
import { feedbackType } from "@/types/feedbackType";

export default function FeedbackListItem({
  feedback,
  isDetail,
}: {
  feedback: feedbackType;
  isDetail: boolean;
}) {
  return (
    <motion.div
      className="hidden sm:flex py-8 gap-20 bg-white rounded-lg  m-4 w-full px-12"
      whileHover={{ scale: !isDetail ? 1.03 : 1 }}
      transition={{ type: "spring", stiffness: 500, mass: 0.5 }}
    >
      <div className="flex gap-12 w-full">
        <UpvoteButton rotation="col">{feedback.upVotes}</UpvoteButton>
        <div className="flex flex-col justify-center gap-1">
          <h3 className="font-bold">{feedback?.title}</h3>
          <p>{feedback?.description}</p>

          <Link
            href={`/${feedback?._id}`}
            className={`bg-slate-200 font-bold text-blue rounded-md px-3 py-2 w-24 text-xs `}
          >
            Suggestion
          </Link>
        </div>
      </div>
      <CommentAmount amount={feedback?.comments?.length || 0} />
    </motion.div>
  );
}
