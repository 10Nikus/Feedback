import Link from "next/link";
import CommentAmount from "../FeedbackList/CommentAmount";
import UpvoteButton from "../FeedbackList/UpvoteButton";
import { feedbackType } from "@/types/feedbackType";

export default function RoadmapItem({
  color,
  event,
  title,
  hash,
}: {
  color: string;
  event: feedbackType;
  title: string;
  hash: string;
}) {
  return (
    <div
      className={`bg-white my-10 px-8 py-4 border-t-8  ${color} rounded-xl `}
    >
      <p className="flex items-center text:xs lg:text-sm xl:text-md">
        <svg
          className="my-1 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
        >
          <circle cx="4" cy="4" r="4" fill={hash}></circle>
        </svg>
        {title}
      </p>
      <h1 className="font-bold md:my-1 text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl">
        {event.title}
      </h1>
      <div className="flex flex-col">
        <p className="mb-2 xl:text-md">{event.description}</p>
        <Link
          href={`/${event?._id}`}
          className="bg-slate-200 font-bold text-blue rounded-md w-fit  px-2 py-1 lg:px-3 lg:py-2  text-xs"
        >
          {event.category}
        </Link>
        <div className="flex justify-between  ">
          <UpvoteButton rotation="row">{event.upVotes}</UpvoteButton>
          <CommentAmount amount={event.comments?.length || 0} />
        </div>
      </div>
    </div>
  );
}
