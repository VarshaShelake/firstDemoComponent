import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countryassign',
  templateUrl: './countryassign.component.html',
  styleUrls: ['./countryassign.component.css']
})
export class CountryassignComponent implements OnInit {

  countries = [
    { id: '1', name: 'India'},
    { id: '2', name: 'Germany'}
  ]

  arrStates: Array<any> = [
    { id: 's1', parentId: '2', name:'Bavaria'},
    { id: 's2', parentId: '2', name:'Berlin'},
    { id: 's3', parentId: '1', name:'Maharashtra'},
    { id: 's4', parentId: '1', name:'Tamilnadu'},

  ]

  states: Array<any> = [];
  constructor() { }

  ngOnInit() {
  }

  OnCountrySelect(val: any) {

    this.states = this.arrStates.filter(c => c.parentId == val.target.value);
  }
}
