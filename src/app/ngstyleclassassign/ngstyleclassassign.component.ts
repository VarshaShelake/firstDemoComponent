import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyleclassassign',
  templateUrl: './ngstyleclassassign.component.html',
  styleUrls: ['./ngstyleclassassign.component.css']
})
export class NgstyleclassassignComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayDetails = false;
  buttonClicks = [];
  totalClicks = 0;

  toggleButton() {
    this.displayDetails = true;
    this.buttonClicks.push(++this.totalClicks);
}

}
