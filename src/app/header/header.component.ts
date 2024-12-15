import { Component, Input, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-header',
  imports: [MenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  @Input() applyIntroScrolled = false;
  @Output() toggleDarkMode = new EventEmitter<any>(); 
  menuToggled = false;

  darkModeClick() {
    this.toggleDarkMode.emit();
  }

  menuClick() {
    this.menuToggled = !this.menuToggled
  }

  closeMenu() {
    this.menuToggled = false;
  }
}
