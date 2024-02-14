"use client";

import { useRouter } from "next/navigation";

// Code to reply to a comment
export default function ReplyToComment({
  replyintTo,
  setReplying,
  index,
  comments,
}: {
  replyintTo: string;
  setReplying: Function;
  index: any;
  comments:
    | [
        {
          content: string;
          replyingTo: string;
          index: string;
          user: {
            image: string;
            name: string;
            username: string;
          };
          replies: [any];
        }
      ]
    | []
    | any;
}) {
  const router = useRouter();

  async function handleSubmit() {
    const area = document.querySelector("textarea");
    const content = area?.value;

    const data = {
      content: content,
      replyingTo: replyintTo,
      user: {
        image: "./assets/user-images/image-zena.jpg",
        name: "Zena Kelley",
        username: "velvetround",
      },
    };
    const id = comments?.findIndex(
      (comment: any) => comment.user.username === replyintTo
    );

    !comments[id].replies
      ? (comments[id].replies = [data])
      : comments[id].replies.push(data);

    try {
      const res = await fetch("/api/comment/" + index, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newComments: [...comments] }),
      });

      if (!res.ok)
        throw new Error("An error occurred while submitting the form");

      setReplying(null);
      router.refresh();
    } catch (error) {
      console.error("Error submitting form", error);
    }
  }
  return (
    <div className="bg-white p-6">
      <h1>
        Replying to <span className="text-blue">@{replyintTo}</span>
      </h1>
      <textarea className="bg-slate-100 w-full rounded-md p-3" rows={7} />
      <div className="flex justify-start gap-3">
        <button onClick={() => setReplying(null)}>Cancel</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}
