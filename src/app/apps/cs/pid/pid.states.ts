import { PIDComponent } from './pid.component';
import { Ng2StateDeclaration } from '@uirouter/angular';

export const pidState: Ng2StateDeclaration = {
	parent: 'cesium_search',
	name: 'pid',
	url: '/pid',
	component: PIDComponent
};

export const PID_STATES = [
	pidState
];
