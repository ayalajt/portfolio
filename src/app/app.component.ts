import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { WorksComponent } from './works/works.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IntroComponent, AboutComponent, SkillsComponent, WorksComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'portfolio';
}
