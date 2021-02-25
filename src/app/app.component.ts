import { Component } from '@angular/core';
import { ThemeService } from './theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  theme = 'dark';

  constructor(private themeService: ThemeService) {}
  toggle() {
    const active = this.themeService.getActiveTheme();
    if (active.name === 'light') {
      this.themeService.setTheme('dark');
      this.theme = 'light';
      console.log('hi!');
    } else {
      this.themeService.setTheme('light');
      this.theme = 'dark';
    }
  }
}
