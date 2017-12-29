import { LocalStorage } from './../util/localStorage';
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

	constructor(public appConfig: AppConfigService, private _ls: LocalStorage) { }

	isAuthenticated() {
		return !!this.appConfig.emailAddress;
	}

	authenticate(username, password) {
		const appConfig = this.appConfig;

		const checkCredentials = () => new Promise<string>((resolve, reject) => {
			const validUsername = this.usernames.indexOf(username) !== -1;
			const validPassword = password === 'rsama';
			localStorage.setItem('_csession', '67C8D652-583E-444B-BE16-D174019DCD66');
			return (validUsername && validPassword) ? resolve(username) : reject('Invalid username or password');
		});

		return wait(800)
			.then(checkCredentials)
			.then((authenticatedUser: string) => {
				appConfig.emailAddress = authenticatedUser;
				appConfig.save();
			});
	}

	logout() {
		this._ls._delete();
		this.appConfig.emailAddress = undefined;
		this.appConfig.save();
	}
}
