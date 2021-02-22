import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { MenuComponent } from './pages/menu/menu.component';
import { SearchComponent } from './components/search/search.component';
import { SelectComponent } from './components/select/select.component';
import { CardHomeComponent } from './components/card-home/card-home.component';


@NgModule({
  declarations: [HomeComponent, DetailsComponent, MenuComponent, SearchComponent, SelectComponent, CardHomeComponent],
  imports: [
    CommonModule,
    CountriesRoutingModule
  ]
})
export class CountriesModule { }
