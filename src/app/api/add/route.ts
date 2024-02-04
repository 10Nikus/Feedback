import { Feedback } from "@/app/models/feedback";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";

export async function POST(req: Request) {
  const jsonBody = await req.json();
  const mongoUrl = process.env.MONGO_URL;

  if (!mongoUrl) {
    return NextResponse.json({ error: "MONGO_URL is not defined" });
  }

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

  mongoose.connect(mongoUrl);
  Feedback.create(data);
  return NextResponse.json({ data });
}
