import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function FeedbackItemListSkeleton() {
  return (
    <Stack spacing={4} className="w-full pt-4">
      <Skeleton variant="rounded" animation="wave" height={152} />
      <Skeleton variant="rounded" animation="wave" height={152} />
      <Skeleton variant="rounded" animation="wave" height={152} />
      <Skeleton variant="rounded" animation="wave" height={152} />
    </Stack>
  );
}
