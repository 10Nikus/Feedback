import { useRouter } from "next/navigation";

export default function CancelBtn() {
  const router = useRouter();
  return (
    <button
      className="bg-navyBlue text-white px-4 py-2  hover:opacity-50 rounded-lg"
      onClick={() => {
        router.back();
        router.refresh();
      }}
    >
      Cancel
    </button>
  );
}
