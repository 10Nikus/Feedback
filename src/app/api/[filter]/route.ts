import DATA from "../../data.json";
import { NextResponse } from "next/server";

export function GET({ filter }: { filter?: string }) {
  const feedback = DATA["productRequests"];
  const mongoUrl = process.env.MONGO_URL;
  const res = filter
    ? feedback.filter(
        (item) => item.status === filter || item.category === filter
      )
    : feedback;
  return NextResponse.json(res);
}
