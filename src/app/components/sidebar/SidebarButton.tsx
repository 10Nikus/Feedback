export default function Button({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <button className="bg-slate-200 text-blue rounded-md px-2 py-1 text-xs font-bold">
      {children}
    </button>
  );
}
