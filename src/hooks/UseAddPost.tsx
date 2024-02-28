import { addDataType } from "@/types/addType";
import { useState } from "react";

export default function useAddPost() {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  async function addPost(data: addDataType) {
    try {
      const res = await fetch("api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok)
        throw new Error("An error occurred while submitting the form");
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  return { addPost, loading, error };
}
