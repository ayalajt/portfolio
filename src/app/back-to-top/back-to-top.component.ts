import { Component, HostListener, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  imports: [],
  templateUrl: './back-to-top.component.html',
  styleUrl: './back-to-top.component.less',
  encapsulation: ViewEncapsulation.None
})
export class BackToTopComponent {
  displayBackToTop = false;
  
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    setTimeout(() => {
      this.checkTrigger()
    }, 100)
  }

  checkTrigger() {
    const heightTrigger = (document.body.scrollHeight / 2) - 800;
    if (window.scrollY > heightTrigger) {
      this.displayBackToTop = true;
    } else {
      this.displayBackToTop = false;
    }
  }

  scrollUp() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}
