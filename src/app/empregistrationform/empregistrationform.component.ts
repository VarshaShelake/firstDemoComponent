import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-empregistrationform',
  templateUrl: './empregistrationform.component.html',
  styleUrls: ['./empregistrationform.component.css']
})
export class EmpregistrationformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  login(form: NgForm) {
    console.log(form.value)
      }

}
