"use client";

import { useState } from "react";
import FeedbuckButton from "../Header/FeedbackButton";

export default function AddComent({ id }: { id: number }) {
  const [comment, setComment] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setComment(e.target.value);
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
        <FeedbuckButton title="Add Comment" link={`/${id}/edit`} />
      </div>
    </div>
  );
}
