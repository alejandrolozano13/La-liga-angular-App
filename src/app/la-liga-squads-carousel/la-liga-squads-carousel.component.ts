import { Component, ElementRef, Input, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ISquads, squadsList } from '../mock/squads.mock';

@Component({
  selector: 'app-la-liga-squads-carousel',
  templateUrl: './la-liga-squads-carousel.component.html',
  styleUrls: ['./la-liga-squads-carousel.component.css']
})
export class LaLigaSquadsCarouselComponent implements OnInit{

  squads: ISquads[] = [];

  constructor(private router: Router){ }

  ngOnInit(): void {
    this.squads = squadsList;
  }
}
