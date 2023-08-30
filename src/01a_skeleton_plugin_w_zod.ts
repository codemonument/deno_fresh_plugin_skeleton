import { Plugin } from "./deps/fresh.ts";
import { z } from "./deps/zod.ts";

const SkeletonOptions = z.object({
  isProd: z.boolean().optional().default(false),
});
type SkeletonOptions = z.infer<typeof SkeletonOptions>;

export function SkeletonPluginWithZodOptions(
  rawOptions: Partial<SkeletonOptions>,
) {
  // validate your options
  // Throws when parsing fails
  const options = SkeletonOptions.parse(
    rawOptions,
  );

  console.log(`[01a_skeleton_plugin_w_zod] isProd: `, options.isProd);
  console.log(
    `[01a_skeleton_plugin_w_zod] typeof isProd: `,
    typeof options.isProd,
  );

  return {
    name: "skeleton_plugin",
  } satisfies Plugin;
}
