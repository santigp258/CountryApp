import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

/* Theme */
import { ThemeModule } from './theme/theme.module';
import { darkTheme } from './theme/dark-theme';
import { lightTheme } from './theme/light-theme';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ThemeModule.forRoot({
      themes: [lightTheme, darkTheme],
      active: 'light',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
