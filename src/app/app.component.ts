import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import { DialogService } from './global/dialog.service';
import { StateService } from '@uirouter/core';
import { AuthService } from './global/auth.service';
import { AppConfigService } from './global/app-config.service';

/**
 * This is the main app component for an authenticated user.
 *
 * This component renders the outermost chrome
 * (application header and tabs, the compose  and logout button)
 * It has a `ui-view` viewport for nested states to fill in.
 */


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	@ViewChild('dialogdiv', { read: ViewContainerRef }) dialogdiv;

	// data
	emailAddress;
	isAuthenticated;

	constructor(appConfig: AppConfigService,
		public authService: AuthService,
		public $state: StateService,
		private dialog: DialogService
	) {
		this.emailAddress = appConfig.emailAddress;
		this.isAuthenticated = authService.isAuthenticated();
	}

	ngOnInit() {
		this.dialog.vcRef = this.dialogdiv;
	}

	show() {
		this.dialog.confirm('foo');
	}

	logout() {
		const { authService, $state } = this;
		authService.logout();
		// Reload states after authentication change
		return $state.go('welcome', {}, { reload: true });
	}
}
