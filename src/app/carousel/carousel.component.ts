import { Component, ElementRef, Inject, Input, PLATFORM_ID, ViewChild, ViewEncapsulation } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
declare var Flickity: any;

@Component({
  selector: 'app-carousel',
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.less',
  encapsulation: ViewEncapsulation.None,
})
export class CarouselComponent {
  @Input() images!: any[]; 
  @ViewChild('carousel') carousel!: ElementRef;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  
  flickityOptions = '{ "cellAlign": "left", "contain": "true", "wrapAround": "true", "imagesLoaded": "true"}'

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const carouselElem = this.carousel.nativeElement;
      let flickity = new Flickity(carouselElem, {
        cellAlign: 'left',
        contain: 'false',
        wrapAround: 'true',
        imagesLoaded: 'true',
        lazyLoad: 'true',
        fade: 'true',
      })

      flickity.resize()
    }
  }
}

