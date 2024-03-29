"use client";

import { useEffect, useState } from "react";
import CancelBtn from "./CancelBtn";
import { useParams, useRouter } from "next/navigation";
import useEditPost from "@/hooks/UseAddReply";
import useDeletePost from "@/hooks/UseDelete";
import useFetchEdit from "@/hooks/UseFetchEdit";
import { editDataType } from "@/types/editType";

export default function Form() {
  const { id }: { id: string } = useParams();

  const router = useRouter();

  const { editPost, loading, error } = useEditPost(id);
  const { deletePost } = useDeletePost();
  const { getData } = useFetchEdit();

  const [title, setTitle] = useState<string>("");
  const [data, setData] = useState<editDataType>({
    newTitle: "",
    newCategory: "",
    newDescription: "",
    status: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData(id);
      setData((prev) => ({
        ...prev,
        newTitle: data.title,
        newCategory: data.category,
        newDescription: data.description,
        status: data.status,
      }));
      setTitle(data.title);
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

  async function handleDelete() {
    await deletePost(id);
    router.replace("/");
    router.refresh();
  }

  async function handleSubmit() {
    await editPost(data);
    router.replace(`/${id}`);
    router.refresh();
  }

  return (
    <div className="bg-white p-10 rounded-md  flex flex-col gap-6 ">
      <h2 className="font-bold text-xl">Editing '{title}' </h2>
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
        <h1 className="font-bold">Update Status</h1>
        <p>Change feedback state</p>
        <select
          className="bg-slate-200 w-full py-2 px-1 rounded-md"
          name="status"
          value={data.status}
          onChange={handleChange}
        >
          <option value="suggestion">Suggestion</option>
          <option value="planned">Planned</option>
          <option value="in-progress">In-progress</option>
          <option value="live">Live</option>
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
      {error && <p className="text-red-500">Somenthing went wrong</p>}
      {!loading && (
        <div className="flex flex-col-reverse gap-4 sm:flex-row sm:justify-between sm:gap-2">
          <button
            type="button"
            className="bg-red hover:opacity-50 text-white px-4 py-2 rounded-lg"
            onClick={handleDelete}
          >
            Delete
          </button>
          <div className="flex flex-col sm:flex-row gap-4">
            <CancelBtn />
            <button
              onClick={handleSubmit}
              className="bg-lilac  hover:opacity-50 text-white  px-4 py-2 rounded-lg"
            >
              Save Changes
            </button>
          </div>
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
