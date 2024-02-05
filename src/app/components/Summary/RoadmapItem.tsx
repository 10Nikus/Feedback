import Link from "next/link";
import CommentAmount from "../FeedbackList/CommentAmount";
import UpvoteButton from "../FeedbackList/UpvoteButton";

export default function RoadmapItem({
  color,
  event,
  title,
}: {
  color: string;
  event: any;
  title: string;
}) {
  return (
    <div
      className={`bg-white my-10 p-2 border-t-8  border-${color}-600 rounded-xl`}
    >
      <p>{title}</p>
      <h1 className="font-bold my-1">{event.title}</h1>
      <p>{event.description}</p>
      <Link
        href={`/${event?._id}`}
        className="bg-slate-200 font-bold text-blue rounded-md px-3 py-2 w-24 text-xs "
      >
        Suggestion
      </Link>
      <div className="flex justify-between px-2">
        <UpvoteButton>{event.upVotes}</UpvoteButton>
        <CommentAmount amount={event.comments?.length || 0} />
      </div>
    </div>
  );
}
