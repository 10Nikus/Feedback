import Avatar from "@mui/material/Avatar";

export default function Comment({ comment }: { comment: any }) {
  return (
    <>
      <div
        className={`py-6 flex w-full justify-between ${
          !comment.replies && "border-b-2 border-gray-300"
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

          <div className="w-full">{comment.content}</div>
        </div>
        <h1 className="text-blue">reply</h1>
      </div>
      {comment.replies?.map((reply: any) => (
        <Comment key={reply.id} comment={reply} />
      ))}
    </>
  );
}
