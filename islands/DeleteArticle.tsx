import { deleteArticle } from "@db";
import { Handlers } from "$fresh/server.ts";

interface ArticleIdProps {
  id?: string;
}

export const handler: Handlers<ArticleIdProps> = {
  async POST(req, ctx) {
    const formData = await req.formData();
    const id = formData.get("id")?.toString();
    console.log(id);

    if (!id) {
      return ctx.render({});
    }

    // await deleteArticle(id);
    const res = await deleteArticle(id);
    console.log(res);

    const url = new URL(req.url);
    return Response.redirect(url.origin + "/");
  },
};

export default function DeleteButton({ id }: ArticleIdProps) {
  return (
    <div class="flex gap-8 py-6">
      <form method="POST">
        <input type="hidden" name="id" value={id} />
        <button type="submit">
          <img src="/trash.svg" />
        </button>
      </form>
    </div>
  );
}
