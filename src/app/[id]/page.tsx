"use client";

import { useParams } from "next/navigation";
import FeedbackListItem from "../components/FeedbackList/FeedbackListItem";
import GoBackBtn from "../components/Header/GoBackBtn";
import Link from "next/link";
import Comment from "../components/FeedbackDetails/Comments";
import AddComent from "../components/FeedbackDetails/AddComments";
import { useState } from "react";
import ReplyToComment from "../components/FeedbackDetails/ReplyToComment";
import useFetch, { loading } from "../hooks/UseFetch";

export default function Page() {
  const { id } = useParams();
  const { data, loading, error }: loading = useFetch(`api/posts/${id}`);
  const [replyingTo, setReplyingTo] = useState(null);

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
      {data && (
        <>
          <FeedbackListItem feedback={data.feedback} />
          <div className="flex  flex-col  py-8 gap-5 bg-white rounded-lg  m-4 w-full px-12">
            <h1>{data.feedback.comments?.length} Comments</h1>
            {data.feedback.comments?.map((comment, index) => (
              <Comment
                key={`${id}${index}`}
                comment={comment}
                setReplying={setReplyingTo}
              />
            ))}

            {replyingTo && (
              <ReplyToComment
                index={id}
                comments={data.feedback.comments}
                replyintTo={replyingTo}
                setReplying={setReplyingTo}
              />
            )}
          </div>
          <AddComent id={id} comments={data.feedback.comments} />
        </>
      )}
    </main>
  );
}
