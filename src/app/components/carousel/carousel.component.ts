import { Component } from '@angular/core';
import { CarouselCardComponent } from '../carousel-card/carousel-card.component';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselCardComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  keralaTours1=[
    {
      id:1,
      src:"images/kathak.jpg",
      title: "Cultural Kaleidoscope: Kathakali and More",
      description:"Immerse yourself in Kerala's vibrant cultural scene with a guided tour of traditional performances. Witness the mesmerizing art of Kathakali. "
    },
    {
      id:2,
      src:"images/beach.jpg",
      title: "Coastal Charms: Kovalam Beach Excursions",
      description:"Relax on the golden sands of Kovalam Beach with guided excursions that include water sports, beachside dining, lighthouse and sunset cruises. "
    },
    
    {
      id:3,
      src:"images/munnar.jpg",
      title: "Enchanting Hills: Munnar Tea Gardens",
      description:"Visit the picturesque hill station of Munnar, known for its sprawling tea gardens. Guided tours take you through the rolling green landscapes."
    },

  ]
  keralaTours2=[
    {
      id:1,
      src:"images/fk.jpg",
      title: "Ancient Echoes: Fort Kochi Heritage Walk",
      description:"Step back in time with a heritage walk through the historic streets of Fort Kochi. This guided tour covers colonial-era buildings, charming streets."
    },
    {
      id:2,
      src:"images/boat.jpg",
      title: "Backwater Bliss: Houseboat Cruises",
      description:"Embark on a serene journey through the backwaters of Kerala aboard a traditional houseboat. Glide along palm-fringed canals, witness local life in waterside villages. "
    },
    
    {
      id:3,
      src:"images/food3.jpg",
      title: "Culinary Delights: Kerala Cooking Classes",
      description:"Dive into Kerala's culinary world with hands-on cooking classes led by local chefs. Learn to prepare traditional dishes using fresh, local ingredients. "
    },

  ]
  keralaTours3=[
    {
      id:1,
      src:"images/wayanad.jpg",
      title: "Majestic Mountains: Wayanad Adventure Tours",
      description:"Explore the rugged beauty of Wayanad with guided adventure tours. Trek through dense forests, visit stunning waterfalls, and discover ancient caves."
    },
    {
      id:2,
      src:"images/ayurveda2.jpg",
      title: "Ayurvedic Wellness: Spa and Healing Tours",
      description:"Experience the ancient healing traditions of Ayurveda with a guided wellness tour. Visit renowned Ayurvedic centers and learn about holistic treatments.  "
    },
    {
      id:3,
      src:"images/munnar.jpg",
      title: "Enchanting Hills: Munnar Tea Gardens",
      description:"Visit the picturesque hill station of Munnar, known for its sprawling tea gardens. Guided tours take you through the rolling green landscapes."
    },

  ]

}
