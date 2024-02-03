import CommentAmount from "../FeedbackList/CommentAmount";
import UpvoteButton from "../FeedbackList/UpvoteButton";
import HeaderButton from "../Header/HeaderButton";

export default function RoadmapItem({
  color,
  event,
  title,
}: {
  color: string;
  event: any;
  title: string;
}) {
  // console.log(color);
  return (
    <div
      className={`bg-white my-10 p-2 border-t-8  border-${color}-600 rounded-xl`}
    >
      <p>{title}</p>
      <h1 className="font-bold my-1">{event.title}</h1>
      <p>{event.description}</p>
      <HeaderButton>Feature</HeaderButton>
      <div className="flex justify-between px-2">
        <UpvoteButton>{event.upvotes}</UpvoteButton>
        <CommentAmount amount={event.comments?.length || 0} />
      </div>
    </div>
  );
}
