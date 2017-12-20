import { Component, OnInit } from '@angular/core';
@Component({
	selector: 'app-home',
	template: `
    <div class="home buttons">
      <button uiSref="cesium_search" class="btn btn-primary">
        <h1><i class="fa fa-envelope"></i></h1>
        <h3>Cesium Lookup</h3>
	  </button>
	  <button uiSref="host" class="btn btn-primary">
        <h1><i class="fa fa-envelope"></i></h1>
        <h3>Cesium Host Manager</h3>
      </button>
    </div>
`,
	styles: []
})
export class HomeComponent {
	constructor() { }
}
