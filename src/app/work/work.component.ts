import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-work',
  imports: [CommonModule, CarouselComponent],
  templateUrl: './work.component.html',
  styleUrl: './work.component.less',
  encapsulation: ViewEncapsulation.None,
})
export class WorkComponent {
  projects = [
    {
      name: "Johnson & Johnson",
      description: 
      `Developed and maintained Johnson & Johnson's primary website during their rebranding initiative. 
      Created modules from Figma designs, including promo modules, lists, video players, 
      article layouts, header, footer, and carousels. Implemented multiple CSS animations for 
      page leads, list hover states, and galleries. Ensured the site was completely accessible via 
      keyboard navigation and WCAG compliant.`,
      year: "2023 - 2024",
      link: "https://www.jnj.com",
      images: [
        "/images/jnj/jnj-01.webp", "/images/jnj/jnj-02.webp", "/images/jnj/jnj-03.webp", "/images/jnj/jnj-04.webp", "/images/jnj/jnj-05.webp", "/images/jnj/jnj-06.webp", "/images/jnj/jnj-07.webp"
      ]
    },
    {
      name: "J&J: Our Heritage",
      description: `
      Individually developed a highly immersive article experience, a first-of-its-kind feature on 
      Johnson & Johnson's primary site. Worked closely with the client and the design team to 
      ensure a seamless and responsive user experience across mobile and desktop. Developed 
      custom module variations for promos, videos, galleries, and quotes, elevating the 
      storytelling and user engagement within articles.
      `,
      year: "2024",
      link: "https://www.jnj.com/our-heritage/",
      images: [
        "/images/heritage/heritage-01.webp", "/images/heritage/heritage-02.webp", "/images/heritage/heritage-03.webp", "/images/heritage/heritage-04.webp", "/images/heritage/heritage-05.webp", "/images/heritage/heritage-06.webp"
      ]    
    },
    {
      name: "Innovative Medicine",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      year: "2024",
      link: "https://innovativemedicine.jnj.com/",
      images: [
        "/images/im/im-01.webp", "/images/im/im-02.webp", "/images/im/im-03.webp", "/images/im/im-04.webp", "/images/im/im-05.webp", "/images/im/im-06.webp", "/images/im/im-07.webp"
      ]    
    },
    {
      name: "My Health Can't Wait",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      year: "2023 - 2024",
      link: "https://innovativemedicine.jnj.com/",
      images: [
        "/images/mhcw/mhcw-01.webp", "/images/mhcw/mhcw-02.webp", "/images/mhcw/mhcw-03.webp", "/images/mhcw/mhcw-04.webp", "/images/mhcw/mhcw-05.webp", "/images/mhcw/mhcw-06.webp", "/images/mhcw/mhcw-07.webp"
      ]    
    },
    {
      name: "Kenvue",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      year: "2023 - 2024",
      link: "https://innovativemedicine.jnj.com/",
      images: [
        "/images/kenvue/kenvue-01.webp", "/images/kenvue/kenvue-02.webp", "/images/kenvue/kenvue-03.webp", "/images/kenvue/kenvue-04.webp", "/images/kenvue/kenvue-05.webp", "/images/kenvue/kenvue-06.webp"
      ]    
    },
    {
      name: "WBEZ Chicago",
      description: 
      `Individually designed and implemented the Events Calendar, providing users with a streamlined 
      overview of upcoming events presented by WBEZ Chicago.`,
      year: "2024",
      link: "https://www.wbez.org/events-calendar",
      images: [
        "/images/wbez/wbez-01.webp", "/images/wbez/wbez-02.webp", "/images/wbez/wbez-03.webp"
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
