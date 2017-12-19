import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-welcome',
	template: `
    <div class="container-fluid">
      <h3>CCC 2.0</h3>
	  <h5><i>Welcome to CCC 2.0</i></h5>
	</div>
`,
	styles: []
})
export class WelcomeComponent implements OnInit {
	constructor() { }

	ngOnInit() {
	}
}
