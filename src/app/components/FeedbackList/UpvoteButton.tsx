export default function UpvoteButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1 justify-center items-center bg-slate-200 rounded-md px-4 h-16 w-12 ">
      <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 6l4-4 4 4"
          stroke="black"
          strokeWidth="2"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
      <p>{children}</p>
    </div>
  );
}
