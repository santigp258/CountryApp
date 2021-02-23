import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styles: [
  ]
})
export class CardHomeComponent implements OnInit {
  @Input('country') country: Country = {
    name: 'Col',
    population: 122222,
    region: 'clcl',
    capital: 'jdjdjd'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
