import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  constructor() { 

  }

  

  ngOnInit() {
  }

  onKeyUp(value) {
    console.log('$event', value.target.value)
  }
  
  firstName :string = 'Varsha';
onButtonClick() {
  console.log('Button is clicked');
  
  }


}
