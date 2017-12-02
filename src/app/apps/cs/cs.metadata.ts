import { Injectable } from '@angular/core';

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
