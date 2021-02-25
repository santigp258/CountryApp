import { Injectable, Inject, EventEmitter } from '@angular/core';
import { THEMES, ACTIVE_THEME, Theme } from './symbols';

@Injectable()
export class ThemeService {

  themeChange = new EventEmitter<Theme>();

  constructor(
    @Inject(THEMES) public themes: Theme[],
    @Inject(ACTIVE_THEME) public theme: string
  ) {
     if(localStorage.getItem('theme')){
       this.theme = localStorage.getItem('theme') || 'light';
     }
  }

  getActiveTheme() {
    const theme = this.themes.find(t => t.name === this.theme);
    if (!theme) {
      throw new Error(`Theme not found: '${this.theme}'`);
    }
    return theme;
  }

  setTheme(name: string) {
    localStorage.setItem('theme', name);
    this.theme = name;
    this.themeChange.emit( this.getActiveTheme());
  }

}
