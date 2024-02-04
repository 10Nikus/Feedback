import DATA from "../../../data.json";

export function GET({ filter }: { filter?: string }) {
  const feedback = DATA["productRequests"];
  const res = filter
    ? feedback.filter(
        (item) => item.status === filter || item.category === filter
      )
    : feedback;
  return Response.json(res);
}
