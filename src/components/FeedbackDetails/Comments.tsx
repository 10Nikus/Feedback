import Avatar from "@mui/material/Avatar";
import Reply from "./Reply";

export default function Comment({
  comment,
  setReplying,
}: {
  comment: any;
  setReplying: Function;
}) {
  return (
    <>
      <div
        className={`py-6 flex justify-between ${
          comment.id
            ? comment.replies
              ? null
              : "border-b-2 border-gray-300"
            : "border-l-2 border-gray-300"
        }`}
      >
        <Avatar
          className="mx-5"
          src={comment.user.image}
          alt={comment.user.name}
        />
        <div className="flex flex-col w-full gap-3">
          <div className="flex flex-row w-full justify-between">
            <div className="flex flex-col w-full ">
              <h1 className="font-bold">{comment.user.name}</h1>
              <p>@{comment.user.username}</p>
            </div>
          </div>

          <div className="w-full">
            <h2>
              <span className="text-blue">
                {comment.replyingTo && "@" + comment.replyingTo}
              </span>
              {" " + comment.content}
            </h2>
          </div>
        </div>
        <h1
          className="text-blue"
          onClick={() => setReplying(comment.user.username)}
        >
          reply
        </h1>
      </div>
      <div className="p-0 m-0 ml-8">
        {comment.replies?.map((reply: any, index: number) => (
          <Reply key={index} reply={reply} />
        ))}
      </div>
      {comment.replies && <div className="border-b-2 border-gray-300 ml-8" />}
    </>
  );
}
