import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SNComponent } from './sn.component';
import { SN_STATES } from './sn.states';
import { UIRouterModule } from '@uirouter/angular';

@NgModule({
	imports: [
		UIRouterModule.forChild({ states: SN_STATES })
	],
	declarations: [
		SNComponent
	],
	providers: []
})
export class SNModule {
}
