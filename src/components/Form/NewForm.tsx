"use client";

import { useState } from "react";
import CancelBtn from "./CancelBtn";
import { useRouter } from "next/navigation";
import useAddPost from "@/hooks/UseAddPost";
import { addDataType } from "@/types/addType";

export default function Form() {
  const { addPost, loading, error } = useAddPost();
  const [data, setData] = useState<addDataType>({
    title: "",
    category: "Feature",
    description: "",
  });

  const router = useRouter();

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit() {
    if (!data.title || !data.description) return;
    await addPost(data);
    router.push("/");
  }

  return (
    <div
      className="bg-white p-10 rounded-md flex flex-col gap-8  "
      onSubmit={handleSubmit}
    >
      <h1 className="font-bold text-xl">Create New Feedback</h1>
      <div>
        <h1 className="font-bold">Feedback Title</h1>
        <p>Add a short, descriptive headline</p>
        <input
          name="title"
          type="text"
          className="bg-slate-200 w-full px-1 py-2 rounded-md"
          value={data.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <h1 className="font-bold">Category</h1>
        <p>Choose a category for your feedback</p>
        <select
          className="bg-slate-200 w-full py-2 px-1 rounded-md"
          name="category"
          value={data.category}
          onChange={handleChange}
        >
          <option value="feature">Feature</option>
          <option value="ui">UI</option>
          <option value="ux">UX</option>
          <option value="enhancement">Enhancement</option>
          <option value="bug">Bug</option>
        </select>
      </div>
      <div>
        <h1 className="font-bold">Feedback Detail</h1>
        <p>
          Include any specific comments on what should be improved, added, etc.
        </p>
        <textarea
          className="bg-slate-200 w-full px-1 py-2 rounded-md"
          name="description"
          value={data.description}
          onChange={handleChange}
        />
      </div>
      {error && <p className="text-red">Sth went wrong</p>}
      {!loading && (
        <div className="flex flex-col-reverse gap-4 sm:flex-row sm:justify-end sm:gap-2">
          <CancelBtn />
          <button
            className="bg-lilac text-white px-4 py-2 rounded-md"
            onClick={handleSubmit}
          >
            Add Feedback
          </button>
        </div>
      )}
      {loading && (
        <div className="flex items-center justify-center">
          <p>Pending...</p>
        </div>
      )}
    </div>
  );
}
