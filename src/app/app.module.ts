import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LocalStorage } from './util/localStorage';
import { AuthLoaderComponent } from './authloader.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, RequestOptions } from '@angular/http';
import { CustomInterceptor } from './custom-interceptor';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home.component';
import { UIRouterModule, UIView } from '@uirouter/angular';
import { APP_STATES } from './app.states';
import { GlobalModule } from './global/global.module';
import { routerConfigFn } from './router.config';
import { HeaderComponent } from './header/header.component';

@NgModule({
	declarations: [
		AppComponent,
		WelcomeComponent,
		LoginComponent,
		HomeComponent,
		AuthLoaderComponent,
		HeaderComponent
	],
	imports: [
		UIRouterModule.forRoot({
			states: APP_STATES,
			otherwise: { state: 'home' },
			config: routerConfigFn,
		}),
		GlobalModule,
		BrowserModule,
		FormsModule,
		HttpModule,
		HttpClientModule
	],
	providers: [
		{ provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },
		{
			provide: HTTP_INTERCEPTORS,
			useClass: CustomInterceptor,
			multi: true,
		},
		HttpClient,
		LocalStorage
	],
	bootstrap: [UIView]
})
export class AppModule { }
