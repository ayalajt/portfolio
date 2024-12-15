import { Component, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.less',
  encapsulation: ViewEncapsulation.None,
})

export class MenuComponent {
  @Input() menuOpened!: any;
  @Output() emitCloseMenu = new EventEmitter<boolean>();

  closeMenu() {
    this.emitCloseMenu.emit(false);
  }
}
