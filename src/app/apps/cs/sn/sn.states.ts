import { SNComponent } from './sn.component';
import { Ng2StateDeclaration } from '@uirouter/angular';

export const snState: Ng2StateDeclaration = {
	parent: 'cesium_search',
	name: 'sn',
	url: '/sn',
	component: SNComponent
}

export const SN_STATES = [
	snState
];
