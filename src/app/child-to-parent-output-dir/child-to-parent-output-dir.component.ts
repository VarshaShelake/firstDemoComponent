import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-child-to-parent-output-dir',
  templateUrl: './child-to-parent-output-dir.component.html',
  styleUrls: ['./child-to-parent-output-dir.component.css']
})
export class ChildToParentOutputDirComponent implements OnInit {
  @Output() fromChild : EventEmitter<any> = new EventEmitter<any>(); // (fromChild)
  constructor() { }

  fName : string = 'Varsha';
  lName:string='Shelake';
  MobileNo:string='9503032415';
  emailId:string='shelakevn@gmail.com';
  city:string='Pune-Nigdi';
  Pincode:string='411062';


lastname: string = 'Bhai';


employee:Employee;
  @Input () child :string;

//@Output () fromChild: EventEmitter<string>=new EventEmitter<string>();

@Output () objFromChild:EventEmitter<Employee>=new EventEmitter<Employee>();


ngOnInit() {
  // console.log(this.child);
  
}

onKeyUp(value) {
  console.log('$event', value.target.value)
}

sendToParent() {
  // this.fromChild.emit(this.lastname);
  // this.fromChild.emit(this.fName);
  // this.fromChild.emit(this.lName);
  // this.fromChild.emit(this.MobileNo);
  // this.fromChild.emit(this.emailId);
  // this.fromChild.emit(this.city);
  // this.fromChild.emit(this.Pincode);
  this.employee=new Employee()
  this.employee.name='Codemind';
  this.employee.salary=1000000;
  this.objFromChild.emit(this.employee)
}
  
}
