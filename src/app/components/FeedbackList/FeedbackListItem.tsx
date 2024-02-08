import Link from "next/link";
import UpvoteButton from "./UpvoteButton";
import CommentAmount from "./CommentAmount";

export default function FeedbackListItem({ feedback }: any) {
  return (
    <div className="flex   py-8 gap-20 bg-white rounded-lg  m-4 w-full px-12">
      <div className="flex gap-12 w-full">
        <UpvoteButton rotation="col">{feedback.upVotes}</UpvoteButton>
        <div className="flex flex-col justify-center gap-1">
          <h3 className="font-bold">{feedback?.title}</h3>
          <p>{feedback?.description}</p>
          <Link
            href={`/${feedback?._id}`}
            className="bg-slate-200 font-bold text-blue rounded-md px-3 py-2 w-24 text-xs "
          >
            Suggestion
          </Link>
        </div>
      </div>
      <CommentAmount amount={feedback?.comments?.length || 0} />
    </div>
  );
}
