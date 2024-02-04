import DATA from "../../data.json";

export function GET() {
  const feedback = DATA["productRequests"];
  return Response.json(feedback);
}
