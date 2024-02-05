"use client";

import { useEffect, useState } from "react";
import FeedbuckButton from "../Header/FeedbackButton";
import CancelBtn from "./CancelBtn";
import { useParams } from "next/navigation";

export default function Form() {
  const { id } = useParams();

  const [data, setData] = useState({
    title: "",
    category: "",
    description: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/posts/65bfd5729e364313890d8cde`
        );
        const result = await response.json();
        setData((prev) => ({
          ...prev,
          title: result.feedback.title,
          category: result.feedback.category,
          description: result.feedback.description,
        }));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

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

  // async function onSubmit(e: FormEvent) {
  //   e.preventDefault();

  //   if (!data.title || !data.description) return;

  //   try {
  //     const res = await fetch("api/posts", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     });

  //     if (!res.ok)
  //       throw new Error("An error occurred while submitting the form");

  //     router.push("/");
  //   } catch (error) {
  //     console.error("Error submitting form", error);
  //   }
  // }

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
          name="description"
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
