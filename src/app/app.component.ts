import { Component } from '@angular/core';
import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // parentToChild : string ='i am coming from server'
  title = 'firstDemoComponent';
  name = "Varsha";
  empCount

data={
  name:'Codemind',
  dept:"IT"
}

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

test='Property Binding Example With Div Tag';
imageUrl='style="display: block;-webkit-user-select: none;margin: auto;background-color: hsl(100, 100%, 100%);transition: background-color 300ms"'

// imgUrl='D:\Angular\HTML CSS TYPESCRIPT\HTML\1080p-ganpati-Images.jpg'

constructor(){
this.getValueFromServer();
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
