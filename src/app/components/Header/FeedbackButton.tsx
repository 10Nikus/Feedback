import Link from "next/link";

export default function FeedbuckButton() {
  return (
    <Link
      href="/new"
      className="flex justify-center items-center bg-lilac text-white rounded-md px-4 py-2 gap-1 font-bold"
    >
      + Add Feedback
    </Link>
  );
}
