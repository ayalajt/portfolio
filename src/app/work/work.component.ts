import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-work',
  imports: [CommonModule, CarouselComponent],
  templateUrl: './work.component.html',
  styleUrl: './work.component.less'
})
export class WorkComponent {
  projects = [
    {
      name: "Johnson & Johnson's Primary Site",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      year: "2023 - 2024",
      link: "https://www.jnj.com",
      images: [
        "/images/jnj.png", "/images/our-heritage.png"
      ]
    },
    {
      name: "J&J: Our Heritage",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      year: "2024",
      link: "https://www.jnj.com/our-heritage/",
      images: [
        "/images/jnj.png", "/images/our-heritage.png"
      ]    
    },
    {
      name: "Innovative Medicine",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      year: "2024",
      link: "https://innovativemedicine.jnj.com/",
      images: [
        "/images/jnj.png", "/images/our-heritage.png"
      ]    
    },
    {
      name: "My Health Can't Wait",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      year: "2023 - 2024",
      link: "https://innovativemedicine.jnj.com/",
      images: [
        "/images/jnj.png", "/images/our-heritage.png"
      ]    
    },
    {
      name: "Kenvue",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      year: "2023 - 2024",
      link: "https://innovativemedicine.jnj.com/",
      images: [
        "/images/jnj.png", "/images/our-heritage.png"
      ]    
    },
    {
      name: "WBEZ Chicago",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      year: "2024",
      link: "https://innovativemedicine.jnj.com/",
      images: [
        "/images/jnj.png", "/images/our-heritage.png"
      ]    
    },
    {
      name: "Lolita's Tip Tool",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      year: "2023 - 2024",
      images: [
        "/images/jnj.png", "/images/our-heritage.png"
      ]    
    },
    {
      name: "Lolita's Invoice Tool",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      year: "2023",
      images: [
        "/images/jnj.png", "/images/our-heritage.png"
      ]    
    }
  ]
}
