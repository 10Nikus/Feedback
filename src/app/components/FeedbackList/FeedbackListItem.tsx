import HeaderButton from "../Header/HeaderButton";

export default function FeedbackListItem({ feedback }: any) {
  return (
    <div className="flex justify-around py-2 gap-20 bg-white rounded-lg p-6 m-4">
      <div className="flex flex-col justify-center items-center bg-slate-200 rounded-md px-4 h-14">
        <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 6l4-4 4 4"
            stroke="#4661E6"
            strokeWidth="2"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
        <p>{feedback.upvotes}</p>
      </div>
      <div className="flex flex-col justify-center w-80">
        <h3 className="font-bold">{feedback.title}</h3>
        <p>{feedback.description}</p>
        <HeaderButton>Suggestion</HeaderButton>
      </div>
      <div className="flex  justify-center items-center">
        <svg width="18" height="16" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z"
            fill="#CDD2EE"
            fillRule="nonzero"
          />
        </svg>
        <p>2</p>
      </div>
    </div>
  );
}
