import HeaderButton from "../Header/HeaderButton";
import UpvoteButton from "./UpvoteButton";

export default function FeedbackListItem({ feedback }: any) {
  return (
    <div className="flex   py-8 gap-20 bg-white rounded-lg  m-4 w-full px-12">
      <div className="flex gap-12 w-full">
        <UpvoteButton>{feedback.upvotes}</UpvoteButton>
        <div className="flex flex-col justify-center gap-1">
          <h3 className="font-bold">{feedback.title}</h3>
          <p>{feedback.description}</p>
          <HeaderButton>Suggestion</HeaderButton>
        </div>
      </div>
      <div className="flex  justify-center items-center gap-1">
        <svg width="18" height="16" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z"
            fill="#CDD2EE"
            fillRule="nonzero"
          />
        </svg>
        <p className="font-bold">2</p>
      </div>
    </div>
  );
}
