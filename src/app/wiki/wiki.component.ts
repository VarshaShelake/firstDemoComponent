// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-wiki',
//   templateUrl: './wiki.component.html',
//   styleUrls: ['./wiki.component.css']
// })
// export class WikiComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { WikiService } from '../services/wiki.service';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent implements OnInit {
   searchData : any  = [];
   searchTerm;
  constructor( private wikiService : WikiService) { }

  ngOnInit() {
   
  }
       
     getData(){
      return this.wikiService.wikiData(this.searchTerm).subscribe((res: any)  =>{
        console.log('Wikipedia Data',res);
        this.searchData = res.query.search;
        // this.searchData = res;
       });
      
     }
     

     }
    
  


