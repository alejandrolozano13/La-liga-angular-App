import { Component, Input, OnInit } from '@angular/core';
import { Player, playersList } from 'src/app/mock/players.mock';

@Component({
  selector: 'app-carousel-players',
  templateUrl: './carousel-players.component.html',
  styleUrls: ['./carousel-players.component.css']
})
export class CarouselPlayersComponent implements OnInit{

  @Input() squadId?: number | string;
  players?: Player[];

  ngOnInit(): void {
    this.players = playersList.filter(player => player.squadId === this.squadId)
  }
}
