import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  countries:Country[] = [];

  constructor(private countryService: CountryService) {
  }
  
  ngOnInit(): void {
    this.countryService.getContryByName('col').subscribe(res =>{
      this.countries = res
    })
  }

  onSearch(eventTerm:any){
    const {search : name, select : region} =  eventTerm;
    this.countryService.getContryByName(name).subscribe( res =>{
      this.countries = [];
      res.forEach(country =>{
        if(country.region === region){
          this.countries.push(country);
        }
      })
    })
  }
 
}
