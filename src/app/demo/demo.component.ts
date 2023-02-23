import { Component } from "@angular/core";


@Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.css']
})

export class DemoComponent{

}



// to  Everyone
// <select (change)="OnCountrySelect($event)" >
//     <option value=""> Select Country</option>
//     <option value="{{c.id}}" *ngFor="let c of countries">
//         {{c.name}}
//     </option>
// </select>



