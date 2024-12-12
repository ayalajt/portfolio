import { Component, Input, ViewEncapsulation, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  @Input() applyIntroScrolled = false;
  @Output() toggleDarkMode = new EventEmitter<any>(); 

  darkModeClick() {
    console.log('clicked')
    this.toggleDarkMode.emit();
  }
}
