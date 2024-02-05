export default function ReplyToComment({
  replyintTo,
  setReplying,
}: {
  replyintTo: string;
  setReplying: Function;
}) {
  return (
    <div className="bg-white p-6">
      <h1>
        Replying to <span className="text-blue">@{replyintTo}</span>
      </h1>
      <textarea className="bg-slate-100" />
      <button onClick={() => setReplying(null)}>Cancel</button>
      <button>Reply</button>
    </div>
  );
}
