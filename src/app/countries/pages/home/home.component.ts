import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  countries: Country[] = [];
  defaultValue = { search: 'col', select: 'Americas' };
  error: boolean = false;
  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.onSearch(this.defaultValue);
  }

  onSearch({ search: name, select: region }: any) {
    if (name === '') {
      this.countryService.getContryByRegion(region).subscribe(
        country => this.countries = country
      )
    } else {
      this.countryService.getContryByName(name).subscribe((countries) => {
        //remove old values
        this.countries = [];
        if (countries.length !== 0) {
          //catch error
          this.error = true;
          //recipe country
          countries.forEach((country) => {
            if (country.region === region) {
              this.countries.push(country);
              this.error = false;
            }
          });
        } else {
          this.error = true;
        }
      });
    }
  }
}
