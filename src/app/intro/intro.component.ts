import { Component, ViewChild, ElementRef, HostListener, Output, EventEmitter, ViewEncapsulation, PLATFORM_ID, Inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-intro',
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.less',
  encapsulation: ViewEncapsulation.None
})

export class IntroComponent {
  @ViewChild('intro') intro!: ElementRef;
  @Output() checkIntroScrolled = new EventEmitter<boolean>();
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.checkPastIntro()
  }

  ngAfterViewInit() {
    setTimeout(() => {
      if (isPlatformBrowser(this.platformId)) {
        this.checkPastIntro()
      }
    }) 
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
