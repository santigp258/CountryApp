import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private baseUrl: string = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) {}

  get httpParams() {
    return new HttpParams().set(
      'fields',
      'name;capital;flag;population;region;alpha2Code;'
    ); //limit the search
  }

  getCountryByRegion(region: string): Observable<Country[]> {
    const url = `${this.baseUrl}/region/${region}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  getContryByName(name: string): Observable<Country[]> {
    const url = `${this.baseUrl}/name/${name}`;
    return this.http
      .get<Country[]>(url, { params: this.httpParams })
      .pipe(catchError((resp) => of([])));
  }

  getCountryByAlphaCode(code: string): Observable<Country> {
    return this.http.get<Country>(`${this.baseUrl}/alpha/${code}`);
  }
}
