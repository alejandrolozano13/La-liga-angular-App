import { Component, OnInit } from '@angular/core';
import { squadsList } from '../mock/squads.mock';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-squads-detail-pages',
  templateUrl: './squads-detail-pages.component.html',
  styleUrls: ['./squads-detail-pages.component.css']
})
export class SquadsDetailPagesComponent implements OnInit{

  squad: any;

  constructor(private _route: ActivatedRoute){}

  ngOnInit(): void {
    const routeParams = this._route.snapshot.paramMap;
    const nameFromRoute = String(routeParams.get('name'));

  // Find the product that correspond with the id provided in route.
    this.squad = squadsList.find(squad => squad.name === nameFromRoute);
  }
}
