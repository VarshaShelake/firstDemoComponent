import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
  NaNames: any;
  constructor(private fb:FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }

// ageCalculator(){
//   if(this.age){
//    const convertAge=new Date(this.age);
//    const timeDiff=Math.abs(Date.now()-convertAge.getTime());
//     this.showAge=Math.floor(timeDiff/(1000*3600*24)/365);
//   }
// }

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

    //using form builder
    // this.myReactiveForm = this.fb.group({
    //   userDetails : this.fb.group({
    //     username:['',[Validators.required,this.NaNames.bind(this)]],
    //     email:['',[Validators.required,Validators.email],this.NaNames]
    //   }),
    //   course : ['Angular'],
    //   genders : this.fb.group

    // })


  }

  OnSubmit() {
    this.isSubmitted=true;
    alert('method called');
    console.log('My ReactiveForm', this.myReactiveForm.value)
  }
  // form.controls['course'].setValue('Angular');
  
// FormGroup.controls['course'].setValue('Angular')

}

