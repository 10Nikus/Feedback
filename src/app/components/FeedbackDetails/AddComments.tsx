"use client";

import { useEffect, useState } from "react";
import FeedbuckButton from "../Header/FeedbackButton";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";

export default function AddComent({
  id,
  comments,
}: {
  id: any;
  comments: any;
}) {
  const [comment, setComment] = useState("");
  const router = useRouter();

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setComment(e.target.value);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!comment) return;
    const newComment = {
      id: uuidv4(),
      content: comment,
      user: {
        image: "./assets/user-images/image-zena.jpg",
        name: "Zena Kelley",
        username: "velvetround",
      },
      replies: [],
    };

    const data = [...comments, newComment];

    try {
      const res = await fetch("/api/comment/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newComments: data }),
      });

      if (!res.ok) {
        throw new Error("An error occurred while submitting the form");
      }
      comments.push(newComment);
      router.refresh()
      setComment("");
    } catch (error) {
      console.error("Error submitting form", error);
    }
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
