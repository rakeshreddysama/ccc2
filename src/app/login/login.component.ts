import { Component, OnInit, Input } from '@angular/core';
import { TargetState, StateService } from '@uirouter/core';
import { AuthService } from '../global/auth.service';
import { AppConfigService } from '../global/app-config.service';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent {
	@Input() returnTo: TargetState;

	usernames: string[];
	credentials = { username: null, password: null };
	authenticating: boolean;
	errorMessage: string;

	constructor(private authService: AuthService,
		private $state: StateService
	) {

		this.credentials = {
			username: '',
			password: ''
		};
	}

	/**
	 * The controller for the `login` component
	 *
	 * The `login` method validates the credentials.
	 * Then it sends the user back to the `returnTo` state, which is provided as a resolve data.
	 */
	login(credentials) {
		this.authenticating = true;

		const returnToOriginalState = () => {
			const state = this.returnTo.state();
			const params = this.returnTo.params();
			const options = Object.assign({}, this.returnTo.options(), { reload: true });
			this.$state.go(state, params, options);
		};

		const showError = (errorMessage) =>
			this.errorMessage = errorMessage;

		const stop = () => this.authenticating = false;
		this.authService.authenticate(credentials.username, credentials.password)
			.then(returnToOriginalState)
			.catch(showError)
			.then(stop, stop);
	}
}
