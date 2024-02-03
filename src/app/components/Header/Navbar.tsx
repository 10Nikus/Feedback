export default function Navbar({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex bg-navyBlue text-white rounded-md  justify-between items-center px-6 py-4 my-4">
      {children}
    </div>
  );
}
