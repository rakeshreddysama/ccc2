import { AppConfigService } from './global/app-config.service';
import { Observable } from 'rxjs/Rx';

import {
	HttpEvent,
	HttpInterceptor,
	HttpHandler,
	HttpRequest
} from '@angular/common/http';

export class CustomInterceptor implements HttpInterceptor {
	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const clonedRequest = req.clone({ headers: req.headers.set('_csession', localStorage.getItem('_csession')) });
		return next.handle(clonedRequest);
	}
}
