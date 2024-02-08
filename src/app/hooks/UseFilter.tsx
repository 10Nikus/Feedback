export default function useGetNumber(data: any) {
  if (!data) return { PLANNED: [], INPROGRESS: [], LIVE: [] };
  console.log(data.feedback);

  const PLANNED = data.feedback.filter(
    (item: any) => item.status === "planned"
  );
  const INPROGRESS = data.feedback.filter(
    (item: any) => item.status === "in-progress"
  );
  const LIVE = data.feedback.filter((item: any) => item.status === "live");

  return { PLANNED, INPROGRESS, LIVE };
}
