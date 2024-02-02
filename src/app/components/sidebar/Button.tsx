export default function Button({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <button className="bg-stone-200 text-blue-700 rounded-sm px-2 py-1 text-xs font-semibold">
      {children}
    </button>
  );
}
