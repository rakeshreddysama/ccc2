import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CSComponent } from './cs.component';
import { CS_STATES } from './cs.states';
import { UIRouterModule } from '@uirouter/angular';
import { SNModule } from './sn/sn.module';
import { debug } from 'util';

@NgModule({
	imports: [
		UIRouterModule.forChild({ states: CS_STATES }),
		SNModule
	],
	declarations: [
		CSComponent
	],
	providers: []
})
export class CSModule {

}
