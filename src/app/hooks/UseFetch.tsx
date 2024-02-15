import { feedbackType } from "@/types/feedbackType";
import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState<Array<feedbackType> | null>(null);
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

export default useFetch;
