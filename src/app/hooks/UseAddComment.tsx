import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function UseAddComment(comments: any, id: string) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function postData(comment: string) {
    const newComment = {
      id: uuidv4(),
      content: comment,
      user: {
        image: "./assets/user-images/image-zena.jpg",
        name: "Zena Kelley",
        username: "velvetround",
      },
      replies: [],
    };

    const data = [...comments, newComment];
    try {
      const res = await fetch("/api/comment/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newComments: data }),
      });

      if (!res.ok) {
        throw new Error("An error occurred while submitting the form");
      }
      comments.push(newComment);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  return { postData, loading, error };
}
