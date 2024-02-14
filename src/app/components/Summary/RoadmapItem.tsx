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
      className={`bg-white my-10 p-3 border-t-8  ${color} rounded-xl h-52 sm:h-auto`}
    >
      <p className=" text:xs lg:text-sm xl:text-md">{title}</p>
      <h1 className="font-bold md:my-1 text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl">
        {event.title}
      </h1>
      <div className="flex flex-col">
        <p className="mb-2 xl:text-md">{event.description}</p>
        <Link
          href={`/${event?._id}`}
          className="bg-slate-200 font-bold text-blue rounded-md w-20 px-2 py-1 lg:px-3 lg:py-2 lg:w-24 text-xs"
        >
          Suggestion
        </Link>
        <div className="flex justify-between  ">
          <UpvoteButton rotation="row">{event.upVotes}</UpvoteButton>
          <CommentAmount amount={event.comments?.length || 0} />
        </div>
      </div>
    </div>
  );
}
