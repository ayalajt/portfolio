import { Component, ViewChild, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-intro',
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.less'
})
export class IntroComponent {
  @ViewChild('intro') intro!: ElementRef;
  @Output() checkIntroScrolled = new EventEmitter<boolean>();

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const introElem = this.intro.nativeElement
    let scrollYOffset = window.scrollY + 56
    if (scrollYOffset > (introElem.offsetTop + introElem.offsetHeight)) {
      this.checkIntroScrolled.emit(true);
    } else {
      this.checkIntroScrolled.emit(false);
    }
  }
}
