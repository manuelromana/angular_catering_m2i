import { Injectable } from '@angular/core';
import { Plat } from './plat_interface';
import { PLATS } from './mock_plat';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PlatService {
  constructor(private http: HttpClient) {}
  private platsUrl =
    'https://my-json-server.typicode.com/manuelromana/mock_plats/plats';
  getPlats(): Observable<Plat[]> {
    return this.http.get<Plat[]>(this.platsUrl);
  }
}
