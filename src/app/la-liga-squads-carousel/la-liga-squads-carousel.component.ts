import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-la-liga-squads-carousel',
  templateUrl: './la-liga-squads-carousel.component.html',
  styleUrls: ['./la-liga-squads-carousel.component.css']
})
export class LaLigaSquadsCarouselComponent implements OnInit{

  @Input() imagens: string[] = [];

  imagePairs: string[][] = [];

  ngOnInit(): void {
    this.imagePairs = this.groupIntoPairs(this.imagens);
  }

  groupIntoPairs(array: string[]): string[][] {
    const pairs = [];
    for (let i = 0; i < array.length; i += 1) {
      pairs.push(array.slice(i, i + 2));
    }
    return pairs;
  }
}
