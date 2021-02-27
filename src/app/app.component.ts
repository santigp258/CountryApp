import { Component } from '@angular/core';
import { ThemeService } from './theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  theme = '';

  constructor(private themeService: ThemeService) {
    const activeTheme = this.themeService.getActiveTheme();
      (activeTheme.name === 'light') ? this.theme = 'dark' : this.theme = 'light';
  }
  toggle() {
    const active = this.themeService.getActiveTheme();
    if (active.name === 'light') {
      this.theme = 'light';
      this.themeService.setTheme('dark');
    } else {
      this.theme = 'dark';
      this.themeService.setTheme('light');
    }
  }
}
