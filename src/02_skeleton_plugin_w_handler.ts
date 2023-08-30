import { HandlerContext, Plugin, PluginRoute } from "./deps/fresh.ts";

export function SkeletonPluginWithHandler() {
  const myHandlerRoute = {
    path: "/handler", // the plugin route will be attached to /handler in the host Fresh app.
    handler: (
      _req: Request,
      _ctx: HandlerContext,
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
