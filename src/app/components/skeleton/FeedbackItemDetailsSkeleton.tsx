import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function FeedbackItemDetailsSkeleton() {
  return (
    <Stack spacing={2} className="w-full px-5">
      <Skeleton variant="rounded" animation="wave" height={152} />
      <Skeleton variant="rounded" animation="wave" height={1000} />
    </Stack>
  );
}
