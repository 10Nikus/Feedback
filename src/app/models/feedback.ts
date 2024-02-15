import { Schema, model, models } from "mongoose";

const feedbackSchema = new Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  upVotes: { type: Number, required: true },
  status: { type: String, required: true },
  description: { type: String, required: true },
  comments: { type: Array, required: true },
});

export const Feedback = models?.Feedback || model("Feedback", feedbackSchema);
