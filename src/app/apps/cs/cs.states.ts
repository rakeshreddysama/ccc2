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
		},
		{
			token: 'tabInfo',
			resolveFn: (csServ: CSService) => {
				return csServ.getTabInfo();
			},
			policy: { async: 'WAIT', when: 'EAGER' },
			deps: [CSService]
		}
	],
	data: { requiresAuth: true }
};

export const snFutureState = {
	parent: 'cesium_search',
	name: 'sn.**',
	url: '/sn',
	loadChildren: './sn/sn.module#SNModule'
};

export const pidFutureState = {
	parent: 'cesium_search',
	name: 'pid.**',
	url: '/pid',
	loadChildren: './pid/pid.module#PIDModule'
};

export const CS_STATES = [
	csState,
	snFutureState,
	pidFutureState
];
