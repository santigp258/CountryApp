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

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.onSearch(this.defaultValue);
  }

  onSearch(eventTerm: any) {
    const { search: name, select: region } = eventTerm;
    this.countryService.getContryByName(name).subscribe((countries) => {
      //remove old values
      this.countries = [];

      //recipe country 
      countries.forEach((country) => {
        if (country.region === region) {
          this.countries.push(country);
        }
      });
    });
  }
}
