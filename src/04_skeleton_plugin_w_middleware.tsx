import {HandlerContext, MiddlewareHandlerContext, Plugin, PluginMiddleware} from './deps/fresh.ts';
import {unknown} from './deps/zod.ts';
import {string} from './deps/zod.ts';

export type MyMiddlewareState = {
	someStateProperty: string;
};

export function SkeletonPluginWithMiddleware() {
	const myMiddleware = {
		path: `/middleware`,
		middleware: {
			handler: async (_req, ctx) => {
				ctx.state.someStateProperty = 'myData';
				const resp = await ctx.next();
				resp.headers.set('server', 'fresh server');
				return resp;
			},
		},
	} satisfies PluginMiddleware<MyMiddlewareState>;

	console.log(`[04_skeleton_plugin_w_middleware] registered route: /middleware`);

	// TODO: Typing is broken
	return {
		name: 'skeleton_plugin',
		middlewares: [myMiddleware],
	} satisfies Plugin;
}
