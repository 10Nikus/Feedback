"use client";

import { useParams } from "next/navigation";
import FeedbackListItem from "../components/FeedbackList/FeedbackListItem";
import GoBackBtn from "../components/Header/GoBackBtn";
import Link from "next/link";
import Comment from "../components/FeedbackDetails/Comments";
import AddComent from "../components/FeedbackDetails/AddComments";
import { useEffect, useState } from "react";
import ReplyToComment from "../components/FeedbackDetails/ReplyToComment";

interface FeedbackItem {
  id: number;
  comments: Comment[];
}

export default function Page() {
  const { id } = useParams();
  const [item, setData] = useState<FeedbackItem | null>(null);
  const [replyingTo, setReplyingTo] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`api/posts/${id}`);
        const result = await response.json();

        setData(result.feedback);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <main className="bg-slate-100 px-36 py-20">
      <div className="flex justify-between m-4  w-full">
        <GoBackBtn color="black" />
        <Link
          href={`${id}/edit`}
          className="bg-lilac text-white rounded-md px-4 py-2 font-bold"
        >
          Edit Feedback
        </Link>
      </div>
      <FeedbackListItem feedback={item} />
      <div className="flex  flex-col  py-8 gap-5 bg-white rounded-lg  m-4 w-full px-12">
        <h1>{item?.comments?.length} Comments</h1>
        {item?.comments?.map((comment, index) => (
          <Comment
            key={`${id}${index}`}
            comment={comment}
            setReplying={setReplyingTo}
          />
        ))}

        {replyingTo && (
          <ReplyToComment replyintTo={replyingTo} setReplying={setReplyingTo} />
        )}
      </div>
      <AddComent id={id} comments={item?.comments} />
    </main>
  );
}
