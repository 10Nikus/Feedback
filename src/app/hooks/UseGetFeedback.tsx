export async function useGetFeedback() {
  try {
    const res = await fetch("http://localhost:3000/api/posts", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading feedback", error);
  }
}
