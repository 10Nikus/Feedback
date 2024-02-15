import { commentType } from "./commentType";

export type feedbackType = {
  id: string;
  _id?: string;
  title: string;
  category: string;
  upVotes: number;
  status: string;
  description: string;
  comments: Array<commentType>;
};
