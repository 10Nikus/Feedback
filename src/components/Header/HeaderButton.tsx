export default function HeaderButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button className="bg-slate-200 font-bold text-blue rounded-md my-2 px-3 py-2 w-24 text-xs ">
      {children}
    </button>
  );
}
