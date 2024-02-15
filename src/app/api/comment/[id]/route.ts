import dbConnect from "@/lib/db";
import { Feedback } from "@/app/models/feedback";
import { NextResponse } from "next/server";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  dbConnect();
  const jsonBody = await req.json();
  const { newComments: comments } = jsonBody;

  await Feedback.findByIdAndUpdate(id, { comments: comments });
  return NextResponse.json({ message: "Added comment" });
}
