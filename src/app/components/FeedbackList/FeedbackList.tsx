import DATA from "../../data.json";
import FeedbackListItem from "./FeedbackListItem";

const ListData = DATA["productRequests"];

export const FeedbackList = () => {
  return (
    <div className="flex flex-col align-middle w-full items-center">
      {ListData.map((feedback) => (
        <FeedbackListItem key={feedback.id} feedback={feedback} />
      ))}
    </div>
  );
};
