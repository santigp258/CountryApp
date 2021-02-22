import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private baseUrl: string = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) {}

  getContryByRegion(region: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.baseUrl}/region/${region}`);
  }

  getContryByName(name: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.baseUrl}/name/${name}`);
  }
}
