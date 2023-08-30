import { Plugin } from "./deps/fresh.ts";
import { z } from "./deps/zod.ts";
import { PluginRoute } from "https://deno.land/x/fresh@1.3.1/src/server/types.ts";

const SkeletonOptions = z.object({});
type SkeletonOptions = z.infer<typeof SkeletonOptions>;

export function SkeletonPluginWithHandler(
  rawOptions: Partial<SkeletonOptions>,
) {
  // validate your options
  // Throws when parsing fails
  const options = SkeletonOptions.parse(
    rawOptions,
  );

  const myHandlerRoute = {
    path: "/handler", // the plugin route will be attached to /handler in the host Fresh app.
    handler: async (
      req: Request,
      ctx: HandlerContext,
    ) => {
      // Do some things in your handler and return a response
      // This will be a GET handler
      // It can return the Response directly or as a promise (a.k.a be an 'async' function)
      return new Response(
        "Route `/handler` for 02_skeleton_plugin_w_handler works!",
        {
          headers: new Headers([
            ["Content-Type", "text/plain"],
          ]),
        },
      );
    },
  } satisfies PluginRoute;

  console.log(`[02_skeleton_plugin_w_handler] registered route: /handler`);

  return {
    name: "skeleton_plugin",
    routes: [myHandlerRoute],
  } satisfies Plugin;
}
