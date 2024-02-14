import Link from "next/link";
import UpvoteButton from "./UpvoteButton";
import CommentAmount from "./CommentAmount";

export default function FeedbackListItemMobile({ feedback, isDetail }: any) {
  return (
    <div className="flex sm:hidden flex-col  py-4  bg-white rounded-lg  m-4 w-full px-6">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex flex-col justify-center gap-2">
          <h3 className="font-bold">{feedback?.title}</h3>
          <p>{feedback?.description}</p>

          <Link
            href={`/${feedback?._id}`}
            className={`flex justify-center items-center bg-slate-200 font-bold text-blue rounded-md px-3 py-2 w-24 text-xs `}
          >
            {feedback.category}
          </Link>
        </div>
      </div>
      <div className="flex justify-between">
        <UpvoteButton rotation="row">{feedback.upVotes}</UpvoteButton>
        <CommentAmount amount={feedback?.comments?.length || 0} />
      </div>
    </div>
  );
}
