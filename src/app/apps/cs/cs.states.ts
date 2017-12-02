import { Transition } from '@uirouter/core';
import { CSService } from './cs.service';
import { CSComponent } from './cs.component';
import { Ng2StateDeclaration } from '@uirouter/angular';

export const csState: Ng2StateDeclaration = {
	parent: 'app',
	name: 'cesium_search',
	url: '/cesium_search?SI',
	component: CSComponent,
	params: {
		SI: {
			type: 'string'
		}
	},
	resolve: [
		{
			token: 'searchInfo',
			resolveFn: (csServ: CSService, trans: Transition) => {
				return csServ.searchSI(trans.params().SI);
			},
			policy: { async: 'WAIT', when: 'EAGER' },
			deps: [CSService, Transition]
		}
	],
	data: { requiresAuth: true }
};

export const CS_STATES = [
	csState
];
