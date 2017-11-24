import { AuthLoaderComponent } from './authloader.component';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome.component';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { Transition } from '@uirouter/core';

/**
 * This is the parent state for the entire application.
 *
 * This state's primary purposes are:
 * 1) Shows the outermost chrome (including the navigation and logout for authenticated users)
 * 2) Provide a viewport (ui-view) for a substate to plug into
 */
export const appState = {
	name: 'app',
	redirectTo: 'welcome',
	component: AppComponent,
};

/**
 * This is the 'welcome' state.  It is the default state (as defined by app.js) if no other state
 * can be matched to the URL.
 */
export const welcomeState = {
	parent: 'app',
	name: 'welcome',
	url: '/welcome',
	component: WelcomeComponent
};


export const authLoaderComponentState = {
	parent: 'app',
	name: 'authLoader',
	url: '/authLoader',
	component: AuthLoaderComponent
};

export const homeState = {
	parent: 'app',
	name: 'home',
	url: '/home',
	component: HomeComponent,
};


export const loginState = {
	parent: 'app',
	name: 'login',
	url: '/login',
	component: LoginComponent,
	resolve: [
		{ token: 'returnTo', deps: [Transition], resolveFn: returnTo },
	]
};

export function returnTo($transition$: Transition): any {
	if ($transition$.redirectedFrom() != null) {
		// The user was redirected to the login state (e.g., via the requiresAuth hook when trying to activate contacts)
		// Return to the original attempted target state (e.g., contacts)
		return $transition$.redirectedFrom().targetState();
	}

	const $state = $transition$.router.stateService;

	// The user was not redirected to the login state; they directly activated the login state somehow.
	// Return them to the state they came from.
	if ($transition$.from().name !== '') {
		return $state.target($transition$.from(), $transition$.params('from'));
	}

	// If the fromState's name is empty, then this was the initial transition. Just return them to the home state
	return $state.target('home');
}

export const contactsFutureState = {
	name: 'contacts.**',
	url: '/contacts',
	loadChildren: './apps/contacts/contacts.module#ContactsModule'
};

export const prefsFutureState = {
	name: 'prefs.**',
	url: '/prefs',
	loadChildren: './apps/prefs/prefs.module#PrefsModule'
};

export const mymessagesFutureState = {
	name: 'mymessages.**',
	url: '/mymessages',
	loadChildren: './apps/mymessages/mymessages.module#MymessagesModule'
};

export const cesiumSearchFutureState = {
	name: 'cesium_search.**',
	url: '/cesium_search',
	loadChildren: './apps/cs/cs.module#CSModule'
};

export const APP_STATES = [
	appState,
	welcomeState,
	homeState,
	loginState,
	contactsFutureState,
	prefsFutureState,
	mymessagesFutureState,
	cesiumSearchFutureState
];
