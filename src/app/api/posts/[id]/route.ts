import dbConnect from "@/app/lib/db";
import { Feedback } from "@/app/models/feedback";
import { NextResponse } from "next/server";
import { z } from "zod";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  dbConnect();
  const jsonBody = await req.json();

  const schema = z.object({
    title: z.string().min(3).max(50),
    description: z.string().min(4).max(250),
    category: z.enum(["feature", "enhancement", "bug", "ui", "ux"]),
  });

  if (!schema.safeParse(jsonBody)) {
    return NextResponse.json(schema.parse(jsonBody), { status: 400 });
  }

  const {
    newCategory: category,
    newTitle: title,
    newDescription: description,
  } = jsonBody;

  await Feedback.findByIdAndUpdate(id, { category, title, description });
  return NextResponse.json({ message: "Feedback updated" });
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  dbConnect();
  await Feedback.findByIdAndDelete(id);
  return NextResponse.json({ message: "Feedback deleted" });
}

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  dbConnect();
  const feedback = await Feedback.findOne({ _id: id });

  return NextResponse.json({ feedback });
}
