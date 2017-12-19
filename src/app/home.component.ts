import { Component, OnInit } from '@angular/core';
// This is a home component for authenticated users.
// It shows giant buttons which activate their respective submodules: Messages, Contacts, Preferences
@Component({
	selector: 'app-home',
	template: `
    <div class="home buttons">
      <button uiSref="cesium_search" class="btn btn-primary">
        <h1><i class="fa fa-envelope"></i></h1>
        <h1>Cesium Search</h1>
      </button>
    </div>
`,
	styles: []
})
export class HomeComponent {
	constructor() { }
}
