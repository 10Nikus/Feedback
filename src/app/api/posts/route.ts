import { Feedback } from "@/app/models/feedback";
import mongoose from "mongoose";

export async function GET() {
  const mongoUrl = process.env.MONGO_URL;
  if (!mongoUrl) {
    return Response.json({ error: "MONGO_URL is not defined" });
  }
  mongoose.connect(mongoUrl);
  const feedback = await Feedback.find();
  return Response.json({ feedback });
}
