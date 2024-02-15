import { userType } from "./userType";

export type commentType = {
  id: number | string;
  content: string;
  user: userType;
  replies?: Array<any>;
};
