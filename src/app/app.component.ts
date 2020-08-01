import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <h3>Binding innerHTML</h3>
        <p>Bound value:</p>
        <p class="e2e-inner-html-interpolated">{{htmlSnippet}}</p>
        <p>Result of binding to innerHTML:</p>
        <p class="e2e-inner-html-bound" [innerHTML]="htmlSnippet"></p>
    `
})
export class AppComponent {
    htmlSnippet = 'Template <script>alert("0wned")</script> <b>Syntax</b>'
}
