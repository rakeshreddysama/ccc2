import { AppConfigService } from '../global/app-config.service';
import { AuthService } from '../global/auth.service';
import { Component } from '@angular/core';
import { UIRouter, StateService } from '@uirouter/angular';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent {
	email;
	isAuthenticated;
	searchText;
	params;

	constructor(appConfig: AppConfigService,
		private authService: AuthService,
		private stateService: StateService) {
		this.email = appConfig.emailAddress;
		this.isAuthenticated = authService.isAuthenticated();
	}

	goHome() {
		// TODO: Implement the redirect to the Home Page
		alert('you clicked on logo');
		this.stateService.go('home');
	}

	search() {
		// TODO: Implement the redirect to PolarisSearch Page
		if (this.searchText !== '') {
			this.stateService.go('cesium_search', { SI: this.searchText });
		}
	}
}
