import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { WorksComponent } from './works/works.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IntroComponent, AboutComponent, SkillsComponent, WorksComponent, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  title = 'portfolio';
  pastIntro = false;
  darkMode = false;

  scrolledPastIntro(newValue: boolean) {
    this.pastIntro = newValue;
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        console.log('prefers dark mode')
        this.darkMode = true;
      }
    }
  }
}
