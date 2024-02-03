import Link from "next/link";

export default function FeedbuckButton({
  link,
  title,
}: {
  link: string;
  title: string;
}) {
  return (
    <Link
      href={link}
      className="flex justify-center items-center bg-lilac text-white rounded-md px-4 py-2 gap-1 font-bold"
    >
      {title}
    </Link>
  );
}
