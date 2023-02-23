import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {
  isSubmitted:boolean=false;
  defaultValue = 'Angular';
  defaultGender = 'Male';
  myReactiveForm: FormGroup;
  constructor() { 
    this.createForm();
  }

  ngOnInit() {
  }
  genders = [ 
    {
      id: '1', value: 'Male'
    },
    {
      id: '2', value: 'Female'
    }
  ]

  createForm()
  {
    this.myReactiveForm = new FormGroup({
      'userDeatils': new FormGroup({
        'username' : new FormControl(null),
        'email': new FormControl(null, [Validators.required, Validators.email])
      }),
      'course': new FormControl('Angular'),
      'genders': new FormControl('null')
    });
  }

  OnSubmit() {
    this.isSubmitted=true;
    alert('method called');
    console.log('My ReactiveForm', this.myReactiveForm.value)
  }
  // form.controls['course'].setValue('Angular');
  
// FormGroup.controls['course'].setValue('Angular')

}

