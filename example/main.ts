/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { FreshOpenProps } from "fresh_openprops";
import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";

await start(manifest, {
  plugins: [
    await FreshOpenProps({
      isProd: false,
      doPrefillCssCache: true,
      cssInputPath: "example/css",
      postcssModuleBaseDir: "example/css_deps",
    }),
  ],
});
