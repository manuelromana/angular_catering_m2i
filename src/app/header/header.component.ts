import { Component, OnInit } from '@angular/core';
import { navigationList } from '../navigation_list';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  listNav = navigationList;
  constructor() {}

  ngOnInit(): void {}
}
