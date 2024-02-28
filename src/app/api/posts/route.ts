import dbConnect from "@/lib/db";
import { Feedback } from "@/models/feedback";

import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";

export async function POST(req: Request) {
  const jsonBody = await req.json();

  const { title, description, category } = jsonBody;

  const data = {
    id: uuidv4(),
    title,
    description,
    category,
    upVotes: 0,
    status: "suggestion",
    comments: [],
  };

  const schema = z.object({
    title: z.string().min(3).max(50),
    description: z.string().min(4).max(250),
    category: z.enum(["feature", "enhancement", "bug", "ui", "ux"]),
  });

  if (!schema.safeParse(jsonBody)) {
    return NextResponse.json(schema.parse(jsonBody), { status: 400 });
  }

  dbConnect();
  Feedback.create(data);
  return NextResponse.json("ok");
}

export async function GET() {
  dbConnect();
  const feedback = await Feedback.find();
  return NextResponse.json(feedback);
}
