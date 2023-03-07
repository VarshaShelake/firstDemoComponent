import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements PipeTransform {

  transform(value: number): any {
    return value.toString().length;
  }

  constructor() { }

  ngOnInit() {
  }

}


// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'custom'
// })
// export class CustomPipe implements PipeTransform {

//   transform(value: number): any {
//     return value.toString().length;
//   }

// }