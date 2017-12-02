import { CommonModule } from './common/common.module';
import { CSService } from './cs.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CSComponent } from './cs.component';
import { CS_STATES } from './cs.states';
import { UIRouterModule } from '@uirouter/angular';
import { SNModule } from './sn/sn.module';

@NgModule({
	imports: [
		UIRouterModule.forChild({
			states: CS_STATES
		}),
		CommonModule,
		SNModule
	],
	declarations: [
		CSComponent
	],
	providers: [CSService]
})
export class CSModule {

}
