import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitchassign',
  templateUrl: './ngswitchassign.component.html',
  styleUrls: ['./ngswitchassign.component.css']
})
export class NgswitchassignComponent implements OnInit {

flowers:any=[
  {
    id:1,
    name:'Rose',
    flowerUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOVVfPXsWREYIna204tlwjFaYw1lflaCfs4jGZXRxLrRQIQNfhWUjn9V7nfAMymV0sJUQ&usqp=CAU',


  },
  {
    id:2,
    name:'Mogara',
    flowerUrl:'https://peppyflora.com/wp-content/uploads/2021/03/Mogra-Beli-Flower-Jasminum-Sambac-3x4-Product-Peppyflora-01-a-Moz.jpg',

  },
  {
    id:3,
    name:'Prajakta',
    flowerUrl:'https://c8.alamy.com/comp/K0CTC7/nyctanthes-arbor-tristis-or-parijat-or-prajakt-flower-typically-found-K0CTC7.jpg',

  },
  {
    id:4,
    name:'Lotus',
    flowerUrl:'https://thumbs.dreamstime.com/b/blooming-pink-lotus-flower-4120103.jpg',

  }
]


  constructor() { }

  ngOnInit() {
  }

//   displayDetails = false;
//   buttonClicks = [];
//   totalClicks = 0;

//   toggleButton() {
//     this.displayDetails = true;
//     this.buttonClicks.push(++this.totalClicks);
// }


}
