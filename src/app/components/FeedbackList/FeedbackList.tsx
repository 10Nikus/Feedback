import FeedbackListItem from "./FeedbackListItem";

async function GetFeedback() {
  try {
    const res = await fetch("http://localhost:3000/api/posts", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading feedback", error);
  }
}

export const FeedbackList = async () => {
  const { feedback } = await GetFeedback();

  return (
    <div className="flex flex-col align-middle w-full items-center">
      {feedback.map((f: any) => (
        <FeedbackListItem key={f._id} feedback={f} />
      ))}
    </div>
  );
};
