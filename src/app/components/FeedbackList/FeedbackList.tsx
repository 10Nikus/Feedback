import DATA from "../../data.json";
import FeedbackListItem from "./FeedbackListItem";

const ListData = DATA["productRequests"];

export const FeedbackList = () => {
  return (
    <div>
      {ListData.map((feedback) => (
        <FeedbackListItem
          key={feedback.id}
          title={feedback.title}
          description={feedback.description}
        />
      ))}
    </div>
  );
};
