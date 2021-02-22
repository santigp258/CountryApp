import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { MenuComponent } from './pages/menu/menu.component';
import { SearchComponent } from './components/search/search.component';
import { CardHomeComponent } from './components/card-home/card-home.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
    MenuComponent,
    SearchComponent,
    CardHomeComponent,
  ],
  imports: [CommonModule, CountriesRoutingModule, ReactiveFormsModule],
})
export class CountriesModule {}
