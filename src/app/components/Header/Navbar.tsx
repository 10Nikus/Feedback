export default function Navbar({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex bg-navyBlue text-white rounded-md  justify-between items-center px-2 gap-4  xs:px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 py-4 my-4  text-sm md:text-sm lg:text-lg xl:text-xl">
      {children}
    </div>
  );
}
