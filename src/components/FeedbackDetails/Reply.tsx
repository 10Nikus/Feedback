import Avatar from "@mui/material/Avatar";

export default function Reply({ reply }: { reply: any }) {
  return (
    <>
      <div
        className={`py-6 flex w-full justify-between ${
          reply.id
            ? reply.replies
              ? null
              : "border-b-2 border-gray-300"
            : "border-l-2 border-gray-300"
        }`}
      >
        <Avatar className="mx-5" src={reply.user.image} alt={reply.user.name} />
        <div className="flex flex-col w-full gap-3">
          <div className="flex flex-row w-full justify-between">
            <div className="flex flex-col w-full ">
              <h1 className="font-bold">{reply.user.name}</h1>
              <p>@{reply.user.username}</p>
            </div>
          </div>

          <div className="w-full">
            <h2>
              <span className="text-blue">
                {reply.replyingTo && "@" + reply.replyingTo}
              </span>
              {" " + reply.content}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
