"use client";

import { useParams } from "next/navigation";
import DATA from "../data.json";
import FeedbackListItem from "../components/FeedbackList/FeedbackListItem";
import GoBackBtn from "../components/Header/GoBackBtn";
import Link from "next/link";
import Comment from "../components/FeedbackDetails/Comments";

const ListData = DATA["productRequests"];

export default function Page() {
  const { id } = useParams();
  const item = ListData.filter((item) => item.id === Number(id));
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
      <FeedbackListItem feedback={item[0]} />
      <div className="flex  flex-col  py-8 gap-20 bg-white rounded-lg  m-4 w-full px-12">
        <h1>{item[0].comments?.length} Comments</h1>
        {item[0].comments?.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </main>
  );
}
