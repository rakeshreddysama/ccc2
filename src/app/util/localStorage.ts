import { Observable } from 'rxjs/Rx';

export class LocalStorage {

	_set(key: string, data: any) {
		localStorage.setItem(key, typeof (data) === 'object' ? JSON.stringify(data) : data);
	}

	_get(key: string) {
		let data = null;
		try {
			data = JSON.parse(localStorage.getItem(key));
		} catch (e) {
			console.log('Error parsing data');
		}
		return data;
	}

	_remove(key: string) {
		localStorage.removeItem(key);
	}

	_delete() {
		localStorage.clear();
	}
}
