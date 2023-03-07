import { Component, OnInit } from '@angular/core';
import { CommubetcompService } from '../services/commubetcomp.service';

@Component({
  selector: 'app-commucomp1',
  templateUrl: './commucomp1.component.html',
  styleUrls: ['./commucomp1.component.css']
})
export class Commucomp1Component implements OnInit {

employee ;
employee1 ;



constructor(private commuBetCompService : CommubetcompService) {
  this.commuBetCompService.employee.subscribe(res => {
    console.log('Comp1',res)
    this.employee = res;
  }, err => {
  console.log('Error occured',err);
  })
  this.commuBetCompService.employee1.subscribe(res => {
    console.log('Comp1',res)
    this.employee1 = res;
  }, err => {
  console.log('Error occured',err);
  })
    }
ngOnInit() {
  }

  Submit(emp,emp1){
    this.employee=emp.value;
    console.log(emp.value);
    this.commuBetCompService.employee.next(emp.value)
    this.employee1=emp1.value;
    console.log(emp1.value);
    this.commuBetCompService.employee1.next(emp1.value)
    
  }

  
  
}
