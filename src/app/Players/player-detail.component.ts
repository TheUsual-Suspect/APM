import { Component, OnInit } from '@angular/core';
import { IPlayer } from './Player';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {

  pageTitle : string = 'Player details';
  fplPlayer : IPlayer;

  constructor(private router : ActivatedRoute) {  
  } 

  ngOnInit(): void {
    let id = +this.router.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.fplPlayer = {
    "id": id,
    "name": "Salah",
    "price": 12,
    "totalPoints": 164,
    "selectedByPercentage": 40,
    "imageUrl": "assets/images/salah.jpg"
    }
  }

}
