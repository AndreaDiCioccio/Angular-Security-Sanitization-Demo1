import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <h3>Binding innerHTML</h3>
        <p>Interpolated value:</p>
        <!-- the interpolated content is always escaped and the html is not interpreted -->
        <p>{{htmlSnippet}}</p>
        <p>Result of binding to innerHTML:</p>
        <!-- using innerHTML the html is interpreted and sanitized -->
        <p [innerHTML]="htmlSnippet"></p>
    `
})

export class AppComponent {
    
    htmlSnippet = 'Template <script>alert("0wned")</script> <b>Syntax</b>'

}
