import { UIRouter, Category } from '@uirouter/core';
import { authCheck } from './global/auth.check';

export function routerConfigFn(router: UIRouter) {
	authCheck(router.transitionService);
	router.trace.enable(Category.TRANSITION);
}
