import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.less',
  encapsulation: ViewEncapsulation.None,
})
export class CarouselComponent {
  @Input() images!: any[]; 
  flickityOptions = '{ "cellAlign": "left", "contain": "true", "wrapAround": "true"}'
}

