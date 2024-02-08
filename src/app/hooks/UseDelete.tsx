import { useState } from "react";

export default function useDeletePost() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  async function deletePost(id: string) {
    try {
      const res = await fetch("/api/posts/" + id, {
        method: "DELETE",
      });

      if (!res.ok)
        throw new Error("An error occurred while submitting the form");
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }
  return { deletePost, loading, error };
}
