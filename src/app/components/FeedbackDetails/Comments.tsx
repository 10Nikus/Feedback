export default function Comment({ comment }: { comment: any }) {
  return (
    <div className="py-6 flex w-full justify-between border-b-2 border-gray-300">
      <div className="flex justify-center items-center">
        <img src={comment.user.image} alt="user" />
      </div>
      <div className="flex flex-col w-full gap-3">
        <div className="flex flex-row w-full justify-between">
          <div className="flex flex-col w-full ">
            <h1 className="font-bold">{comment.user.name}</h1>
            <p>@{comment.user.username}</p>
          </div>
          <h1 className="text-blue">reply</h1>
        </div>

        <div className="w-full">{comment.content}</div>
      </div>
    </div>
  );
}
