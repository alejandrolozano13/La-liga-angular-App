import { Component, OnInit } from '@angular/core';
import { ISquads, squadsList } from './mock/squads.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'la-liga-angular';

  squads: ISquads[] = [];

  ngOnInit(): void {
      this.squads = squadsList;
  }
}
