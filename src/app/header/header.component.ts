import { AppConfigService } from '../global/app-config.service';
import { AuthService } from '../global/auth.service';
import { Component } from '@angular/core';

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
		public authService: AuthService) {
		this.email = appConfig.emailAddress;
		this.isAuthenticated = authService.isAuthenticated();
	}

	goHome() {
		// TODO: Implement the redirect to the Home Page
		alert('you clicked on logo');
	}

	search() {
		// TODO: Implement the redirect to PolarisSearch Page
		if (this.searchText !== '') {
			alert('you entered ' + this.searchText);
		} else {
			alert('No Value entered');
		}
	}
}
