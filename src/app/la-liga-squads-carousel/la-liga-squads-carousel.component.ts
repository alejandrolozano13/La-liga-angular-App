import { Component, ElementRef, Input, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-la-liga-squads-carousel',
  templateUrl: './la-liga-squads-carousel.component.html',
  styleUrls: ['./la-liga-squads-carousel.component.css']
})
export class LaLigaSquadsCarouselComponent implements OnInit{

  @Input() imagens: string[] = [];

  ngOnInit(): void {
    
  }

  onClickLogoSquad(item:any){
    console.log(item);
  }
}
