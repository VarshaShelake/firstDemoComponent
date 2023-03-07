import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

persons =[
  {name:'Varsha', city:'Pune'},
  {name:'Varshu', city:'Ppur'}
]

employee=[
  {
    empId:101,
    name:'Varsha',
    role:'Admin'
  },
  {
    empId:102,
    name:'Komal',
    role:'Developer'
  },
  {
    empId:103,
    name:'Reshma',
    role:'developer'
  },
  {
    empId:104,
    name:"Shubham",
    role:'Admin'
  }
]
  constructor() { }
}
