import { v4 as uuidv4 } from "uuid";
export async function POST(req: Request) {
  const jsonBody = await req.json();

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

  return Response.json(data);
}
