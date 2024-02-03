import Link from "next/link";

export default function GoBackBtn({ color }: { color: string }) {
  return (
    <Link href="../" className="flex justify-center items-center gap-1">
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
    </Link>
  );
}
