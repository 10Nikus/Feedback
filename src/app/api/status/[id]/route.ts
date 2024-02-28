import dbConnect from "@/app/lib/db";
import { Feedback } from "@/models/feedback";
import { NextResponse } from "next/server";
import { z } from "zod";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const mySchema = z.enum(["planned", "in-progress", "live"]);

  dbConnect();
  const jsonBody = await req.json();
  const { newStatus: status } = jsonBody;

  if (!mySchema.safeParse(status)) {
    return NextResponse.json(mySchema.parse(status), { status: 400 });
  }

  await Feedback.findByIdAndUpdate(id, { status });
  return NextResponse.json({ message: "Updated status" });
}
