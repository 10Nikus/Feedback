import { Skeleton, Stack } from "@mui/material";

export default function Loading() {
  return (
    <main className="bg-slate-100 flex justify-center  items-center px-56 h-svh pt-10">
      <Stack spacing={2} className=" flex justify-center">
        <Skeleton variant="rounded" animation="wave" height={626} width={587} />
      </Stack>
    </main>
  );
}
