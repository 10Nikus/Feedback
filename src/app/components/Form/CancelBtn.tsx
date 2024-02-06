import { useRouter } from "next/navigation";

export default function CancelBtn() {
  const router = useRouter();
  return (
    <button
      className="bg-slate-200 text-white px-4 py-2 rounded-md"
      onClick={() => router.back()}
    >
      Cancel
    </button>
  );
}
