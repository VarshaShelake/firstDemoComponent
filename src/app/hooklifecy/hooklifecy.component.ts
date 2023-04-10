import { createContentChild } from '@angular/compiler/src/core';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { DemoserviceService } from '../services/demoservice.service';

@Component({
  selector: 'app-hooklifecy',
  templateUrl: './hooklifecy.component.html',
  styleUrls: ['./hooklifecy.component.css']
})
export class HooklifecyComponent implements OnChanges , OnInit , DoCheck , AfterContentInit, AfterContentChecked , AfterViewInit , AfterViewChecked , OnDestroy{

@Input()  parentData = String;
 
@Input() parentData1 = Number;

@ViewChild("childHook", {static : false}) viewChild : ElementRef;

@ContentChild("child",{static : false})  contentChild : ElementRef;

counter ;
num : number = 1;

  constructor(private demoService : DemoserviceService) { 
    console.log('HooklifecyComponent constuctor called');
    }

    ngOnDestroy(): void {
  console.log('HooklifecyComponent ngOnDestroy called');
  clearInterval(this.counter);
  }

  

  ngAfterViewChecked(): void {
    console.log('HooklifecyComponent ngAfterViewChecked called');
    this.viewChild.nativeElement.setAttribute('style',`color : ${this.parentData1}`);
  }
  ngAfterViewInit(): void {
    console.log('HooklifecyComponent ngAfterViewInit called',this.viewChild);
    this.viewChild.nativeElement.setAttribute('style',`color : ${this.parentData1}`);
  }
  ngAfterContentChecked(): void {
    console.log('HooklifecyComponent ngAfterContentChecked called');
    this.contentChild.nativeElement.setAttribute('style',`color : ${this.parentData1}`);
  }
  ngAfterContentInit(): void {
    console.log('HooklifecyComponent ngAfterContentInit called',this.contentChild);
    // this.contentChild.nativeElement.setAttribute('style','color : blue');
    this.contentChild.nativeElement.setAttribute('style',`color : ${this.parentData1}`);
  }
  
  ngOnInit(): void {
    console.log('HooklifecyComponent ngOnInit called');
    this.demoService.getUsers().subscribe(res => {
      console.log('users from hooks components',res);
      
    });
    // this.counter = setInterval(() =>{
    //   this.num = this.num + 1;
    //   console.log(this.num);
    //   },1000);
  }

  ngDoCheck(): void {
    // throw new Error('Method not implemented.');
    console.log('HooklifecyComponent ngDoCheck called');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('HooklifecyComponent ngOnChanges called',changes);

    for(const propname in changes ){
      const prop = changes[propname];
      console.log(prop);

      const{currentValue,previousValue,firstChange} = prop;

      console.log(`Prop name ${propname}`);
      console.log(`Prev value ${previousValue}`);
      console.log(`current value ${currentValue}`);
      console.log(`first change ${firstChange}`);
      
      
      
      
      
    }
    
  }

  

}
