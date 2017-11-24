import { TransitionService } from '@uirouter/core';
import { AuthService } from './auth.service';

export function authCheck(transitionService: TransitionService) {

	const requiresAuthCriteria = {
		to: (state) => state.data && state.data.requiresAuth
	};

	const redirectToLogin = (transition) => {
		const authService: AuthService = transition.injector().get(AuthService);
		const $state = transition.router.stateService;
		if (!authService.isAuthenticated()) {
			return $state.target('login', undefined, { location: false });
		}
	};
	transitionService.onBefore(requiresAuthCriteria, redirectToLogin, { priority: 10 });
}
