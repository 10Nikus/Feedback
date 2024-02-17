"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import UseAddComment from "@/app/hooks/UseAddComment";
import { commentType } from "@/types/commentType";

export default function AddComent({
  id,
  comments,
}: {
  id: string;
  comments: Array<commentType>;
}) {
  const { postData } = UseAddComment(comments, id);
  const [comment, setComment] = useState("");
  const router = useRouter();

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setComment(e.target.value);
  }

  async function handleSubmit() {
    if (!comment) return;
    await postData(comment);

    router.refresh();
    setComment("");
  }
  return (
    <div className="bg-white m-4 px-12 rounded-md w-full pt-12 pb-6">
      <h1 className="font-bold text-2xl pb-4">Add Comment</h1>
      <textarea
        className="bg-slate-200 w-full px-2 py-2 rounded-md"
        placeholder="type your comments here"
        rows={4}
        value={comment}
        onChange={handleChange}
        maxLength={250}
      />
      <div className="flex justify-between mt-6">
        <p className="opacity-75">{250 - comment.length} Words Left</p>
        <button
          className="bg-lilac hover:opacity-50 text-white  px-4 py-2 rounded-lg"
          onClick={handleSubmit}
        >
          Post comment
        </button>
      </div>
    </div>
  );
}
