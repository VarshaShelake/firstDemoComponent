import { Component, OnInit } from '@angular/core';
import { Employee } from './models/employee';
import { DemoserviceService } from './services/demoservice.service';
import { MysericesService } from './services/myserices.service';
import { RapidapisService } from './services/rapidapis.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  // parentToChild : string ='i am coming from server'
  title = 'firstDemoComponent'; 
  name = "Varsha";
  empCount;
  namesearch='';

data={
  name:'Codemind',
  dept:"IT"
}

products={}
posts = [
  {
    title: 'Pam Tree',
    content: 'I love this tree'
  },
  {
    title: 'Mango Tree',
    content: 'I love this tree'
  }
]
users;

test='Property Binding Example With Div Tag';
imageUrl='style="display: block;-webkit-user-select: none;margin: auto;background-color: hsl(100, 100%, 100%);transition: background-color 300ms"'

// imgUrl='D:\Angular\HTML CSS TYPESCRIPT\HTML\1080p-ganpati-Images.jpg'

constructor( private rapidApisService : RapidapisService,private myService:MysericesService, private demoService : DemoserviceService){
this.getValueFromServer();
}

ngOnInit():void {

  this.rapidApisService.getFinance().subscribe(res => {
    console.log('Rapid Response',res);
    
  })

  this.products =this.myService.products;
  this.demoService.getUsers().subscribe(res =>{
    console.log('user api results',res);
    this.users=res;
  
   }), err =>{
    console.log(err);
    }
}

getValueFromServer(){
this.empCount=1000;
}
currentTime():string{
  let date='03-Feb-2023'
   return date;
}
onParent(details:Employee) {
  console.log('From Child To Parent emp :',details);
  
  
}



}


// console.log('From Child To Parent :');
//   console.log('First Name :',details);
//   console.log('Last Name :',details.lName);
//   console.log('Mobile Number :',details.MobileNo);
//   console.log('Email Id :',details.emailId);
//   console.log('City :',details.city);
//   console.log("Pincode :",details.Pincode);
