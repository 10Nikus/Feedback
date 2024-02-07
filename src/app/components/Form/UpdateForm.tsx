"use client";

import { useEffect, useState } from "react";
import FeedbuckButton from "../Header/FeedbackButton";
import CancelBtn from "./CancelBtn";
import { useParams, useRouter } from "next/navigation";

export default function Form() {
  const { id } = useParams();

  const router = useRouter();
  const [data, setData] = useState({
    newTitle: "",
    newCategory: "",
    newDescription: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/posts/${id}`);
        const result = await response.json();
        setData((prev) => ({
          ...prev,
          newTitle: result.feedback.title,
          newCategory: result.feedback.category,
          newDescription: result.feedback.description,
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

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!data.newTitle || !data.newDescription) return;

    try {
      const res = await fetch("/api/posts/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok)
        throw new Error("An error occurred while submitting the form");
      router.back();
      router.refresh();
    } catch (error) {
      console.error("Error submitting form", error);
    }
  }

  async function handleDelete() {
    try {
      const res = await fetch("/api/posts/" + id, {
        method: "DELETE",
      });

      if (!res.ok)
        throw new Error("An error occurred while submitting the form");

      router.replace("/");
      router.refresh();
    } catch (error) {
      console.error("Error submitting form", error);
    }
  }

  return (
    <form className="bg-white p-10  flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="font-bold text-5xl">Update your Feedback</h1>
      <div>
        <h1 className="font-bold">Feedback Title</h1>
        <p>Add a short, descriptive headline</p>
        <input
          name="newTitle"
          type="text"
          className="bg-slate-200 w-full px-1 py-2 rounded-md"
          value={data.newTitle}
          onChange={handleChange}
        />
      </div>
      <div>
        <h1 className="font-bold">Category</h1>
        <p>Choose a category for your feedback</p>
        <select
          name="newCategory"
          className="bg-slate-200 w-full py-2 px-1 rounded-md"
          value={data.newCategory}
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
          name="newDescription"
          className="bg-slate-200 w-full px-1 py-2 rounded-md"
          value={data.newDescription}
          onChange={handleChange}
        />
      </div>
      <div className="flex justify-end gap-2">
        <CancelBtn />

        <button type="button" onClick={handleDelete}>
          delete
        </button>
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
