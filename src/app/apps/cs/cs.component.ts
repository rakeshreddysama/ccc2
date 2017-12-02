import { SearchInfo } from './cs.metadata';
import { Observable } from 'rxjs/Rx';
import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component(
	{
		selector: 'app-cs-main',
		template: `
		This is Main Cesium Search Component
		<ui-view></ui-view>`,
		styles: []
	}
)
export class CSComponent implements OnInit {
	@Input() searchInfo: Observable<SearchInfo>;
	ngOnInit() {
		// debugger;
		this.searchInfo.subscribe(
			res => {
				debugger;
			},
			err => {
				debugger;
			});
	}
}
