"use client";

import { useEffect, useState } from "react";
import FeedbuckButton from "../Header/FeedbackButton";
import { useRouter } from "next/navigation";
import UseAddComment from "@/app/hooks/UseAddComment";

export default function AddComent({
  id,
  comments,
}: {
  id: any;
  comments: any;
}) {
  const { postData, loading, error } = UseAddComment(comments, id);
  const [comment, setComment] = useState("");
  const router = useRouter();

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setComment(e.target.value);
  }

  async function handleSubmit() {
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
        rows={7}
        value={comment}
        onChange={handleChange}
        maxLength={250}
      />
      <div className="flex justify-between mt-6">
        <p>{250 - comment.length} Words Left</p>
        <button onClick={handleSubmit}>Add Comment</button>
      </div>
    </div>
  );
}
