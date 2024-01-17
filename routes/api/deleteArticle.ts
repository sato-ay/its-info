// routes/api/deleteArticle.ts

import { deleteArticle } from "@db";

export default async function handler(req: Request) {
  const { articleId } = await req.json();

  if (!articleId) {
    return new Response(JSON.stringify({ error: "Id is required" }), {
      status: 400,
    });
  }

  await deleteArticle(articleId);

  return new Response(null, { status: 204 });
}
