import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveformassign',
  templateUrl: './reactiveformassign.component.html',
  styleUrls: ['./reactiveformassign.component.css']
})
export class ReactiveformassignComponent implements OnInit {

  reactiveFormAssign : FormGroup;
  isSubmitted=false;
  defaultValue='Advanced'
  constructor() { 
    this.onCreate();
  }

  ngOnInit() {
  }

  onCreate() {
    this.reactiveFormAssign = new FormGroup({
      'email' : new FormControl(null,[Validators.required,Validators.email]),
        'course' : new FormControl('Advanced'),
        'password' : new FormControl(null,Validators.required),
        'date' : new FormControl(null,Validators.required),
        'button' : new FormControl(null,Validators.required)
        
    });

  }

  // onSubmit(){
  //     this.isSubmitted=true;
  //     alert('Method Called');
  //     console.log("Reactive Form : ",this.reactiveFormAssign.value);
      
  //   }

  OnSubmit() {
    this.isSubmitted=true;
    // alert('method called');
    console.log('My Reactive Form', this.reactiveFormAssign.value)
  }

  }


