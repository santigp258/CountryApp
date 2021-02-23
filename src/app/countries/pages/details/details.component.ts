import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: [],
})
export class DetailsComponent implements OnInit {
  country!: Country;
  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.countryService.getCountryByAlphaCode(id)) //retornar id
      )
      .subscribe((country) => {
        this.country = country;
      });
  }

  ngOnInit(): void {}
}
