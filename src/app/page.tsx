import { FeedbackList } from "./components/FeedbackList/FeedbackList";
import Header from "./components/Header/Header";
import Sidebar from "./components/sidebar/Sidebar";

export default async function Home() {
  const data = await fetch("http://localhost:3000/api/posts").then((res) =>
    res.json()
  );
  const posts = data.feedback;
  return (
    <main className="flex bg-slate-100 px-36 py-20">
      <Sidebar />
      <div className="w-full mx-0">
        <Header />
        <FeedbackList posts={posts} />
      </div>
    </main>
  );
}
