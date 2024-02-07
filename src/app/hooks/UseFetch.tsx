import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState<data | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        if (!response.ok) throw new Error(result.message);
        setData(result);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

type Reply = {
  content: "1000 sure";
  replyingTo: "upbeat1811";
  user: {
    image: "./assets/user-images/image-zena.jpg";
    name: "Zena Kelley";
    username: "velvetround";
  };
};

type Comment = {
  id: string;
  content: string;
  user: {
    image: string;
    name: string;
    username: string;
  };
  replies: Reply[];
};

type data = {
  feedback: {
    _id: string;
    id: string;
    title: string;
    category: string;
    upVotes: number;
    status: string;
    description: string;
    comments: Comment[];
  };
};

type loading = {
  data: data | null;
  loading: boolean;
  error: Error | null;
};

export default useFetch;
export type { data, loading, Comment, Reply };
