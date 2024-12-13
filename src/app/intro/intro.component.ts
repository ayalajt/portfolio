import { Component, ViewChild, ElementRef, HostListener, Input, Output, EventEmitter, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
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
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.checkPastIntro()
  }

  ngAfterContentChecked() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkPastIntro()
    }
  }

  checkPastIntro() {
    const introElem = this.intro.nativeElement
    let scrollYOffset = window.scrollY + 56
    if (scrollYOffset > (introElem.offsetTop + introElem.offsetHeight)) {
      this.checkIntroScrolled.emit(true);
    } else {
      this.checkIntroScrolled.emit(false);
    }
  }
}
