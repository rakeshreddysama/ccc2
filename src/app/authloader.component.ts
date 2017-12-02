import { Component, OnInit } from '@angular/core';
// This is a base component for prod deployment.
// It shows giant buttons which activate their respective submodules: Messages, Contacts, Preferences
@Component({
	selector: 'app-authloader',
	template: `
    <div>
      Please wait while the security is being applied
    </div>
`,
	styles: []
})
export class AuthLoaderComponent {
	constructor() { }
}
