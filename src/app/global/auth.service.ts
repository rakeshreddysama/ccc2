import { Injectable } from '@angular/core';
import { AppConfigService } from './app-config.service';
import { wait } from '../util/util';

/**
 * This service emulates an Authentication Service.
 */
@Injectable()
export class AuthService {
	// data
	usernames: string[] = ['rsama', 'dev'];

	constructor(public appConfig: AppConfigService) { }

	/**
	 * Returns true if the user is currently authenticated, else false
	 */
	isAuthenticated() {
		return !!this.appConfig.emailAddress;
	}

	authenticate(username, password) {
		const appConfig = this.appConfig;

		// checks if the username is one of the known usernames, and the password is 'password'
		const checkCredentials = () => new Promise<string>((resolve, reject) => {
			const validUsername = this.usernames.indexOf(username) !== -1;
			const validPassword = password === 'rsama';

			return (validUsername && validPassword) ? resolve(username) : reject('Invalid username or password');
		});

		return wait(800)
			.then(checkCredentials)
			.then((authenticatedUser: string) => {
				appConfig.emailAddress = authenticatedUser;
				appConfig.save();
			});
	}

	/** Logs the current user out */
	logout() {
		this.appConfig.emailAddress = undefined;
		this.appConfig.save();
	}
}
