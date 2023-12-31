import { IS_BROWSER } from "$fresh/runtime.ts";
import { apply, Configuration, setup, tw } from "twind";

export { apply, setup, tw };
export const config: Configuration = {};

if (IS_BROWSER) setup(config);
