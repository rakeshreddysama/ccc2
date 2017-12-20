import { Observable } from 'rxjs/Rx';
import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component(
	{
		selector: 'app-chm-main',
		template: `
		This is Main Cesium Host Manager Component
		<ui-view></ui-view>`,
		styles: []
	}
)
export class CHMComponent implements OnInit {
	ngOnInit() {
	}
}
