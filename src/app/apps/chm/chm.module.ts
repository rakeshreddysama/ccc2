import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CHMComponent } from './chm.component';
import { CHM_STATES } from './chm.states';
import { UIRouterModule } from '@uirouter/angular';

@NgModule({
	imports: [
		UIRouterModule.forChild({
			states: CHM_STATES
		})
	],
	declarations: [
		CHMComponent
	],
	providers: []
})
export class CHMModule {

}
