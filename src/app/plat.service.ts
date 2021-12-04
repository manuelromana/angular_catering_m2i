import { Injectable } from '@angular/core';
import { Plat } from './plat_interface';
import { PLATS } from './mock_plat';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlatService {
  constructor() {}

  getPlats(): Observable<Plat[]> {
    const plats = of(PLATS);
    return plats;
  }
}
