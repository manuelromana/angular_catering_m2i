import { Component, OnInit } from '@angular/core';
import { Plat } from '../plat_interface';
import { PLATS } from '../mock_plat';
import { PlatService } from '../plat.service';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css'],
})
export class CatalogListComponent implements OnInit {
  plats: Plat[] = [];
  constructor(private platsService: PlatService) {}

  ngOnInit(): void {
    this.getPlats();
  }
  getPlats(): void {
    this.platsService.getPlats().subscribe(plats => (this.plats = plats));
  }
}
