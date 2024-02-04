import { v4 as uuidv4 } from "uuid";
import { z } from "zod";

export async function POST(req: Request) {
  const mongoUrl = process.env.MONGO_URL;
  const jsonBody = await req.json();

  const schema = z.object({
    title: z.string().min(3).max(50),
    description: z.string().min(4).max(250),
    category: z.enum(["feature", "enhancement", "bug", "ui", "ux"]),
  });

  const { title, description, category } = jsonBody;

  const data = {
    id: uuidv4(),
    title,
    description,
    category,
    upvotes: 0,
    status: "suggestion",
    comments: [],
  };
  if (!schema.safeParse(jsonBody)) {
    return Response.json(schema.parse(jsonBody), { status: 400 });
  }

  return Response.json({ data });
}
