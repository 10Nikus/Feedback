import { userType } from "./userType";

export type replyType = {
  content: string;
  replyingTo: string;
  user: userType;
  replies?: Array<replyType>;
};
