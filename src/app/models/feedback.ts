import { Schema } from "mongoose";

const feedbackSchema = new Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  upVotes: { type: Number, required: true },
});
