import { Component, OnInit } from '@angular/core';
import { PLATS } from '../mock_plat';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css'],
})
export class CatalogListComponent implements OnInit {
  plats = PLATS;
  constructor() {}

  ngOnInit(): void {}
}
