import { Transition } from '@uirouter/core';
import { CHMComponent } from './chm.component';
import { Ng2StateDeclaration } from '@uirouter/angular';

export const chmState: Ng2StateDeclaration = {
	parent: 'app',
	name: 'host',
	url: '/host',
	component: CHMComponent,
	resolve: [],
	data: { requiresAuth: true }
};



export const CHM_STATES = [
	chmState
];
