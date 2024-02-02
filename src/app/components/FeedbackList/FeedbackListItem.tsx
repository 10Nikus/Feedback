import Button from "../sidebar/Button";

export default function FeedbackListItem({
  title,
  description,
}: Readonly<{ title: string; description: string }>) {
  return (
    <div className="flex justify-around">
      <div>
        <button>
          <img src="/images/user-image.jpg" alt="User Image" />
        </button>
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <Button>Suggestion</Button>
      </div>
      <div>
        <button>
          <img src="/images/upvote.svg" alt="Upvote" />
        </button>
        <p>100</p>
      </div>
    </div>
  );
}
