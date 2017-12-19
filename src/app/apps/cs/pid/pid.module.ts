import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PIDComponent } from './pid.component';
import { PID_STATES } from './pid.states';
import { UIRouterModule } from '@uirouter/angular';

@NgModule({
	imports: [
		UIRouterModule.forChild({ states: PID_STATES })
	],
	declarations: [
		PIDComponent
	],
	providers: []
})
export class PIDModule {
}
