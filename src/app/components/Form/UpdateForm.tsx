"use client";

import { useState } from "react";
import FeedbuckButton from "../Header/FeedbackButton";
import CancelBtn from "./CancelBtn";
import DATA from "../../data.json";

export default function Form({ id }: { id: number }) {
  const ListData = DATA["productRequests"];

  const item = ListData.find((item) => item.id === id);

  const [data, setData] = useState({
    title: item?.title,
    category: item?.category,
    description: item?.description,
  });

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

  return (
    <form className="bg-white p-10  flex flex-col gap-8">
      <h1 className="font-bold text-5xl">Update your Feedback</h1>
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
          value={data.description}
          onChange={handleChange}
        />
      </div>
      <div className="flex justify-end gap-2">
        <CancelBtn />
        {/* <FeedbuckButton title="Update Feedback" link="/" /> */}
        <button
          type="submit"
          className="bg-cyan-500 text-white px-5 py-2 rounded-md"
        >
          Update Feedback
        </button>
      </div>
    </form>
  );
}
