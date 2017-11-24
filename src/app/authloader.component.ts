import { Component, OnInit } from '@angular/core';
// This is a base component for prod deployment.
// It shows giant buttons which activate their respective submodules: Messages, Contacts, Preferences
@Component({
	selector: 'app-authloader',
	template: `
    <div class="home buttons">
      Please wait while auth is being set
    </div>
`,
	styles: []
})
export class AuthLoaderComponent {
	constructor() { }
}
