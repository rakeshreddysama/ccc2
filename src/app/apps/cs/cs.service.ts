import { deserialize } from 'json-typescript-mapper';
import { SearchInfo } from './cs.metadata';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Request, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Subscriber } from 'rxjs/Subscriber';

@Injectable()
export class CSService {
	constructor(private http: Http) { }

	public searchSI(searchInfo: String): Observable<SearchInfo> {

		if (searchInfo == null || searchInfo === '') {
			return new Observable<SearchInfo>((subscriber: Subscriber<SearchInfo>) =>
				subscriber.next(new SearchInfo())).map(o => o);
		} else {
			const _headers = new Headers({});
			_headers.append('_csession', '67C8D652-583E-444B-BE16-D174019DCD66');
			const req = new Request({
				method: 'GET',
				url: 'https://polarisweb3-stg.cisco.com/svclnx/cgi-bin/central_cs/services.py/searchdata/SAL1411D63G',
				headers: _headers
			});

			return this.http.request(req)
				.map((res: Response) => {
					const json_obj = res.json();
					return deserialize(SearchInfo, json_obj['results'][0]);
				})
				.catch((error: any) => {
					return Observable.throw(error.json().error || 'Server Error');
				});
		}
	}
}

