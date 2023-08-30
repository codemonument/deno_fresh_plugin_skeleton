/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { FreshOpenProps } from "fresh_openprops";
import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";
import { SkeletonPlugin, SkeletonPluginWithZodOptions } from "@mod";

await start(manifest, {
  plugins: [
    await FreshOpenProps({
      isProd: false,
      doPrefillCssCache: true,
      cssInputPath: "example/css",
      postcssModuleBaseDir: "example/css_deps",
    }),
    SkeletonPlugin({ option1: true, option2: "" }),
    SkeletonPluginWithZodOptions({ isProd: true }),
  ],
});
