import { CSComponent } from './cs.component';
import { Ng2StateDeclaration } from '@uirouter/angular';

export const csState: Ng2StateDeclaration = {
	parent: 'app',
	name: 'cesium_search',
	url: '/cesium_search',
	component: CSComponent,
	data: { requiresAuth: true }
};

export const CS_STATES = [
	csState
];
