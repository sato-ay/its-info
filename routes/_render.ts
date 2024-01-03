import { config, setup } from "@twind";
import { RenderContext } from "$fresh/server.ts";
import { virtualSheet } from "twind/sheets";

const sheet = virtualSheet();
sheet.reset();
setup({ sheet, ...config });

export function render(ctx: RenderContext) {
  const snapshot = ctx.state.get("twindSnapshot") as unknown[] | null;
  sheet.reset(snapshot || undefined);
  ctx.styles.splice(0, ctx.styles.length, ...sheet.target);
  const newSnapshot = sheet.reset();
  ctx.state.set("twindSnapshot", newSnapshot);
}
