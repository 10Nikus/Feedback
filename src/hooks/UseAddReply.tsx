import { editDataType } from "@/types/editType";
import { useState } from "react";

export default function useEditPost(id: string) {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  async function editPost(data: editDataType) {
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
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  return { editPost, loading, error };
}
