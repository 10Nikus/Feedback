import dbConnect from "@/app/lib/db";
import { Feedback } from "@/app/models/feedback";
import { NextResponse } from "next/server";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  dbConnect();
  const jsonBody = await req.json();
  const { newStatus: status } = jsonBody;

  await Feedback.findByIdAndUpdate(id, { status });
  return NextResponse.json({ message: "Updated status" });
}
