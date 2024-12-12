import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.less'
})
export class SkillsComponent {
 skillsFrontEnd = ["HTML", "JavaScript", "CSS", "LESS", "Handlebars", "TypeScript", "Angular", "GSAP", "Flickity"];
 skillsMisc = ["Git", "Jira", "Figma", "Docker", "VSCode", "Brightspot CMS", "Firebase Database"]
}
