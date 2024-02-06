import Link from "next/link";
import { useRouter } from "next/navigation";

export default function GoBackBtn({ color }: { color: string }) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex justify-center items-center gap-1"
    >
      <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6 9L2 5l4-4"
          stroke={color}
          strokeWidth="2"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
      Go Back
    </button>
  );
}
