import { ITabInfo } from './cs.metadata';
import { Injectable } from '@angular/core';
import { JsonProperty } from 'json-typescript-mapper';

export interface ISearchTypes {
	line_id: String;
	mac_address_sn: String;
	machine: String;
	order_number: String;
	pn: String;
	product: String;
	sernum: String;
	sn_debug: String;
	sn_dev: String;
	sn_stage: String;
	tracecode: String;
}

export interface ITabInfo {
	display_name: String;
	option: String;
	pagetype: String;
	username: String;
	visible: String;
}

export class SearchInfo implements ISearchTypes {
	constructor(public line_id: String = null,
		public mac_address_sn: String = null,
		public machine: String = null,
		public order_number: String = null,
		public pn: String = null,
		public product: String = null,
		public sernum: String = null,
		public sn_debug: String = null,
		public sn_dev: String = null,
		public sn_stage: String = null,
		public tracecode: String = null) {
	}
}

export class TabInfo implements ITabInfo {
	constructor(public display_name: String = null,
		public option: String = null,
		public pagetype: String = null,
		public username: String = null,
		public visible: String = null) {
	}
}

export class TabList {
	@JsonProperty({ clazz: TabInfo, name: 'results' })
	tabs: ITabInfo[];
	constructor() {
		this.tabs = void 0;
	}
}
