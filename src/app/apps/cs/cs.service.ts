import { baseUrl, ServiceTypes } from './../../util/util';
import { LocalStorage } from './../../util/localStorage';
import { deserialize, serialize } from 'json-typescript-mapper';
import { SearchInfo, TabList } from './cs.metadata';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Request, Response, Headers } from '@angular/http';
import { HttpClient, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Subscriber } from 'rxjs/Subscriber';

@Injectable()
export class CSService {
	constructor(private http: HttpClient, private _ls: LocalStorage) { }

	public searchSI(searchInfo: String): Observable<SearchInfo> {
		if (searchInfo == null || searchInfo === '') {
			return new Observable<SearchInfo>((subscriber: Subscriber<SearchInfo>) =>
				subscriber.next(new SearchInfo())).map(o => o);
		} else {
			let search_result: any = this._ls._get('cs~' + searchInfo);
			if (search_result) {
				return new Observable<SearchInfo>((subscriber: Subscriber<SearchInfo>) =>
					subscriber.next(search_result)).map(o => o);
			} else {
				return this.http.request('GET', baseUrl(ServiceTypes.webpy) + 'central_cs/services.py/searchdata/SAL1411D63G')
					.map((res: Response) => {
						const resp = res['results'][0];
						search_result = deserialize(SearchInfo, resp);
						this._ls._set('cs~' + searchInfo, search_result);
						return search_result;
					})
					.catch((error: any) => {
						return Observable.throw(error.error || 'Server Error');
					});
			}
		}
	}

	public getTabInfo(): Observable<TabList> {
		let tabList: any = this._ls._get('tabList');
		if (tabList) {
			return new Observable<TabList>((subscriber: Subscriber<TabList>) =>
				subscriber.next(tabList)).map(o => o);
		} else {
			return this.http.request('GET', baseUrl(ServiceTypes.webpy) + 'polarisappssvc/services.py/getuserappsconfigoptionswithusername/cjoubarn')
				.map((res: Response) => {
					tabList = deserialize(TabList, res);
					this._ls._set('tabList', tabList);
					return tabList;
				})
				.catch((error: any) => {
					return Observable.throw(error.error || 'Server Error');
				});
		}
	}
}
