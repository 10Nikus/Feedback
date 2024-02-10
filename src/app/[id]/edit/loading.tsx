import { Skeleton } from "@mui/material";

export default function Loading() {
  return (
    <main className="bg-slate-100 flex flex-col items-center px-44 h-svh">
      <Skeleton variant="rounded" animation="wave" height={626} />
    </main>
  );
}
