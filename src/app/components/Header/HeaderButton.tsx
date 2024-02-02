export default function HeaderButton({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <button className="bg-slate-200 font-bold text-blue rounded-md px-3 py-2 w-24 text-xs ">
      {children}
    </button>
  );
}
