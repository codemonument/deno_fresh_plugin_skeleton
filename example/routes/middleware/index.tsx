import {defineRoute} from '$fresh/src/server/defines.ts';
import {MyMiddlewareState} from '@mod';

export default defineRoute<MyMiddlewareState>((_req, routeContext) => {
	return (
		<>
			<h1>Middleware Demo Page</h1>
			<p>Value of routeContext.state.someStateProperty: {routeContext.state.someStateProperty}</p>
		</>
	);
});
