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
      name: "Illustration Portfolio",
      description: `Created a minimalist portfolio website for an illustrator to showcase their work. Prioritized high
      quality images, performance, accessibility, and responsiveness across mobile and desktop devices. Hosted on Netlify, developed with EJS and LESS.`,
      year: "2025",
      link: "https://www.helenbodde.com",
      images: [
        {
          src: "/images/art/art-01.webp",
          alt: "Homepage of Graphic Designer Site"
        },
        {
          src: "/images/art/art-02.webp",
          alt: "Lightbox image opened in Graphic Designer Site"
        },
        {
          src: "/images/art/art-03.webp",
          alt: "Concept art and footer of Graphic Designer Site"
        },
        {
          src: "/images/art/art-04.webp",
          alt: "Social media designs in Graphic Designer Site"
        }
      ]
    },
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
        {
          src: "/images/jnj/jnj-01.webp",
          alt: "Homepage of Johnson & Johnson's website"
        },
        {
          src: "/images/jnj/jnj-02.webp",
          alt: "Image carousel on Johnson & Johnson's website"
        },
        {
          src: "/images/jnj/jnj-03.webp",
          alt: "Latest news promo module on Johnson & Johnson's website"
        },
        {
          src: "/images/jnj/jnj-04.webp",
          alt: "Article headline on Johnson & Johnson's website"
        },
        {
          src: "/images/jnj/jnj-05.webp",
          alt: "Article content on Johnson & Johnson's website"
        },
        {
          src: "/images/jnj/jnj-06.webp",
          alt: "Search module on Johnson & 'Johnson's website"
        },
        {
          src: "/images/jnj/jnj-07.webp",
          alt: "Page lead on Johnson & Johnson's website"
        }
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
      link: "https://www.jnj.com/our-heritage/our-beginning",
      images: [
        {
          src: "/images/heritage/heritage-01.webp",
          alt: "Article introduction for J&J Our Heritage"
        },
        {
          src: "/images/heritage/heritage-02.webp",
          alt: "Article's chapter headline for J&J Our Heritage"
        },
        {
          src: "/images/heritage/heritage-03.webp",
          alt: "Quote in article for J&J Our Heritage"
        },
        {
          src: "/images/heritage/heritage-04.webp",
          alt: "Image carousel in article for J&J Our Heritage"
        },
        {
          src: "/images/heritage/heritage-05.webp",
          alt: "Text content in article for J&J Our Heritage"
        },
        {
          src: "/images/heritage/heritage-06.webp",
          alt: "Footer in article for J&J Our Heritage"
        }
      ] 
    },
    {
      name: "Innovative Medicine",
      description: `
      Collaborated with multiple front-end developers to rebrand a website for a subsidiary of 
      Johnson & Johnson. Implemented multiple homepage modules, image carousels, page leads, and 
      article layouts. Developed visually appealing animations, including panel transitions and 
      fade-ins.`,
      year: "2024",
      link: "https://innovativemedicine.jnj.com/",
      images: [
        {
          src: "/images/im/im-01.webp",
          alt: "Homepage of Innovative Medicine"
        },
        {
          src: "/images/im/im-02.webp",
          alt: "Homepage content of Innovative Medicine"
        },
        {
          src: "/images/im/im-03.webp",
          alt: "Image carousel on Innovatie Medicine's homepage"
        },
        {
          src: "/images/im/im-04.webp",
          alt: "Promo module on Innovative Medicine's homepage"
        },
        {
          src: "/images/im/im-05.webp",
          alt: "Article headline on Innovative Medicine's website"
        },
        {
          src: "/images/im/im-06.webp",
          alt: "Page content on Innovative Medicine's website"
        },
        {
          src: "/images/im/im-07.webp",
          alt: "Search functionality on Innovative's medicine"
        },
      ]     
    },
    {
      name: "My Health Can't Wait",
      description: `
      Assisted with the rebranding of a Johnson & Johnson informational website by developing key 
      components. Collaborated with the design team to create buttons, homepage modules, video 
      carousels, quote carousels, accordion modules, and icon lists.`,
      year: "2023 - 2024",
      link: "https://www.myhealthcantwait.com/",
      images: [
        {
          src: "/images/mhcw/mhcw-01.webp",
          alt: "Homepage for My Health Can't Wait"
        },
        {
          src: "/images/mhcw/mhcw-02.webp",
          alt: "Homepage content for My Health Can't Wait"
        },
        {
          src: "/images/mhcw/mhcw-03.webp",
          alt: "Video carousel for My Health Can't Wait"
        },
        {
          src: "/images/mhcw/mhcw-04.webp",
          alt: "Accordion module for My Health Can't Wait"
        },
        {
          src: "/images/mhcw/mhcw-05.webp",
          alt: "Icon list with text for My Health Can't Wait"
        },
        {
          src: "/images/mhcw/mhcw-06.webp",
          alt: "Icon list without text for My Health Can't Wait"
        },
        {
          src: "/images/mhcw/mhcw-07.webp",
          alt: "Quote carousel for My Health Can't Wait"
        },
      ]
    },
    {
      name: "Kenvue",
      description: `
      Provided front-end maintenance for a Johnson & Johnson subsidiary website, implementing key 
      updates to enhance functionality. Developed and updated homepage modules, icon lists, and footer, as well 
      as overhauled site typography with a new font style. Extensively optimized images for 
      responsiveness across devices, and ensured all updates met accessibility standards`,
      year: "2023 - 2024",
      link: "https://www.kenvue.com/",
      images: [
        {
          src: "/images/kenvue/kenvue-01.webp",
          alt: "Homepage for Kenvue"
        },
        {
          src: "/images/kenvue/kenvue-02.webp",
          alt: "Homepage content for Kenvue"
        },
        {
          src: "/images/kenvue/kenvue-03.webp",
          alt: "Page content for Kenvue"
        },
        {
          src: "/images/kenvue/kenvue-04.webp",
          alt: "Person icon list for Kenvue"
        },
        {
          src: "/images/kenvue/kenvue-05.webp",
          alt: "Search functionality for Kenvue"
        },
        {
          src: "/images/kenvue/kenvue-06.webp",
          alt: "Article content for Kenvue"
        },
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
        {
          src: "/images/wbez/wbez-01.webp",
          alt: "Homepage of WBEZ Chicago"
        },
        {
          src: "/images/wbez/wbez-02.webp",
          alt: "Events list of WBEZ Chicago"
        },
        {
          src: "/images/wbez/wbez-03.webp",
          alt: "Event details of WBEZ Chicago"
        },
      ]
    },
    {
      name: "Lolita's Tip Tool",
      description: 
      `Worked closely with a local restaurant to automate the calculation process of their worker's 
      daily tip payout, reducing the time for this process from an hour to a few minutes each day. 
      Results are accessible at any time, downloadable in PDF format, and daily results can be 
      consolidated across multiple days for monthly payroll processing. Hosted on Netlify using HTML, 
      JS, CSS, and a Google Firebase Database.`,
      year: "2022 - 2024",
      images: [
        {
          src: "/images/calc/calc-01.webp",
          alt: "Homepage of Tip Calculator site"
        },
        {
          src: "/images/calc/calc-02.webp",
          alt: "Results when using Tip Calculator site"
        },
        {
          src: "/images/calc/calc-03.webp",
          alt: "Homepage and results of Tip History"
        },
        {
          src: "/images/calc/calc-04.webp",
          alt: "Combined results when using Tip History"
        }
      ]
    },
    {
      name: "Lolita's Invoice Tool",
      description: 
      `Developed a custom tool for a local restaurant to streamline daily invoice management. The tool 
      allows staff to submit invoices, view daily totals, combine invoices to see total cost 
      across multiple days, and download results in PDF format. Hosted on Netlify using HTML, 
      JS, CSS, and a Google Firebase Database.`,
      year: "2022 - 2023",
      images: [
        {
          src: "/images/invoices/invoices-01.webp",
          alt: "Homepage of Invoice Tool site"
        },
        {
          src: "/images/invoices/invoices-02.webp",
          alt: "Expanded results when using Invoice Tool site"
        },
        {
          src: "/images/invoices/invoices-03.webp",
          alt: "Combined results when using Invoice Tool site"
        }
      ]   
    }
  ]
}
