import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function RoadmapSkeleton() {
  return (
    <Stack>
      <Skeleton variant="text" animation="wave" height={24} />
      <Skeleton variant="text" animation="wave" height={24} />

      <Stack spacing={5} className="w-full pt-10">
        <Skeleton variant="rounded" animation="wave" height={296} />
        <Skeleton variant="rounded" animation="wave" height={296} />
      </Stack>
    </Stack>
  );
}
