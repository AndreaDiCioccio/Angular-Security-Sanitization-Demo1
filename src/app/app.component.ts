import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <h3>Binding innerHTML</h3>
        <p>Interpolated value:</p>
        <!-- il contenuto interpolato viene sempre sottoposto a escape e l' html non viene interpretato -->
        <p>{{htmlSnippet}}</p>
        <p>Result of binding to innerHTML:</p>
        <!-- con innerHTML il'html viene interpretato e sanificato -->
        <p [innerHTML]="htmlSnippet"></p>
    `
})
export class AppComponent {
    
    htmlSnippet = 'Template <script>alert("0wned")</script> <b>Syntax</b>'

}
