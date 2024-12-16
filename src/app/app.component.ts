import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { WorksComponent } from './works/works.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BackToTopComponent } from './back-to-top/back-to-top.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IntroComponent, AboutComponent, SkillsComponent, WorksComponent, FooterComponent, HeaderComponent, BackToTopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  title = 'portfolio';
  pastIntro = false;
  darkMode = false;
  passedValue = '';

  scrolledPastIntro(newValue: boolean) {
    this.pastIntro = newValue;
  }

  toggledDarkMode() {
    this.darkMode = !this.darkMode;
    localStorage.setItem('dark-mode', JSON.stringify(this.darkMode));
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const themeMode = localStorage.getItem('dark-mode')
      if (themeMode) {
        console.log('pref set!')
        this.darkMode = JSON.parse(themeMode)
      } else {
          if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            console.log('prefers dark mode')
            this.darkMode = true;
          }
      } 
    }
  }
}
