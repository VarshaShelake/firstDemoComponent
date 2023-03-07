import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommubetcompService {

  //userName = new Subject<any>(); // observable
// userName = new BehaviorSubject<any>('Codemind1122');

employee = new Subject<any>();
employee1 = new Subject<any>();

// employee = new BehaviorSubject<object>({1:'Varsha'});
// employee1 = new BehaviorSubject<object>({});
  constructor() { }
}
