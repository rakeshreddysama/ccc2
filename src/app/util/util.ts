import { environment } from './../../environments/environment';
import { pattern, isObject, identity, val } from '@uirouter/core';
/** Some utility functions used by the application */

export const setProp = (obj, key, val) => { obj[key] = val; return obj; };
export const pushToArr = (array, item) => { array.push(item); return array; };
export const uniqReduce = (arr, item) => arr.indexOf(item) !== -1 ? arr : pushToArr(arr, item);
export const flattenReduce = (arr, item) => arr.concat(item);
const guidChar = (c) => c !== 'x' && c !== 'y' ? '-' : Math.floor(Math.random() * 16).toString(16).toUpperCase();
export const guid = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.split('').map(guidChar).join('');
// A function that returns a promise which resolves after a timeout
export const wait = (delay) => new Promise(resolve => setTimeout(resolve, delay));

export const copy = pattern([
	[Array.isArray, val => val.map(copy)],
	[isObject, val => Object.keys(val).reduce((acc, key) => (acc[key] = copy(val[key]), acc), {})],
	[val(true), identity]
]);

export const baseUrl = (type: ServiceTypes) => {
	let returnUrl = '';
	if (environment.production) {
		returnUrl += 'https://cesium.cisco.com/';
	} else if (environment.stage) {
		returnUrl += 'https://cesium-stg.cisco.com/';
	} else {
		switch (type) {
			case 1: returnUrl += 'https://polarisweb3-stg.cisco.com/';
				break;
			case 2: returnUrl += 'https://e2l1ap3.cisco.com/';
				break;
			default: returnUrl += 'https://polaris-stg.cisco.com/';
				break;
		}
	}
	switch (type) {
		case 1: returnUrl += 'svclnx/cgi-bin/';
			break;
		case 2: returnUrl += 'apollo/cesiumsvcs/polaris/';
			break;
		default: returnUrl += 'apps/machineservices/MachineDetails.svc/';
			break;
	}
	return returnUrl;
};

export enum ServiceTypes {
	net = 0,
	webpy = 1,
	apollo = 2
}
