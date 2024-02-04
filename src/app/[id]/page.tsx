"use client";

import { useParams } from "next/navigation";
import FeedbackListItem from "../components/FeedbackList/FeedbackListItem";
import GoBackBtn from "../components/Header/GoBackBtn";
import Link from "next/link";
import Comment from "../components/FeedbackDetails/Comments";
import AddComent from "../components/FeedbackDetails/AddComments";
import { useEffect, useState } from "react";

interface FeedbackItem {
  id: number;
  // Add other properties as needed
  comments: Comment[]; // Assuming comments is an array of Comment type
}

export default function Page() {
  const { id } = useParams();
  const [item, setData] = useState<FeedbackItem | null>(null);

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
          <Comment key={`${id}${index}`} comment={comment} />
        ))}
      </div>
      <AddComent id={+id} />
    </main>
  );
}
