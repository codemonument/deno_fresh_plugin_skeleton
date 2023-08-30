import {HandlerContext, Plugin, PluginRoute} from './deps/fresh.ts';

export function SkeletonPluginWithComponent() {
	const myComponentRoute = {
		path: '/component', // the plugin route will be attached to /component in the host Fresh app.

		// TODO: Works when running, but Typescript can't detect the jsx properly
		component: () => {
			return <h1>Plugin with page component works!</h1>;
		},
	} satisfies PluginRoute;

	console.log(`[03_skeleton_plugin_w_component] registered route: /component`);

	return {
		name: 'skeleton_plugin',
		routes: [myComponentRoute],
	} satisfies Plugin;
}
