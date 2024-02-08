import { useState } from "react";

export default function useFetchEdit() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function getData(id: string) {
    try {
      const response = await fetch(`http://localhost:3000/api/posts/${id}`);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return { getData, loading, error };
}
