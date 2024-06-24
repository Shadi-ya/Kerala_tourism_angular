import { Component } from '@angular/core';
import { DistrictCardComponent } from '../../components/district-card/district-card.component';
import { IndividualDistrictCardComponent } from '../../components/individual-district-card/individual-district-card.component';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [DistrictCardComponent,IndividualDistrictCardComponent],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.scss'
})
export class ExploreComponent {
  activities=[
    {
      id:1,
      name:"Museum of kerala History",
      src:"https://www.keralatourism.org/images/destination/large/museum_of_kerala_history_at_edappally20131107115142_183_1.jpg"
    },
    {
      id:2,
      name:"Kerala Kalamandalam",
      src:"https://www.keralatourism.org/images/homecontentimage/desktop/kalamandalam.jpg"
    },
    {
      id:3,
      name:"Kuthampully Handloom Village",
      src:"https://www.keralatourism.org/images/homecontentimage/desktop/Kuthampully2.jpg"
    },
    {
      id:4,
      name:"Mannam",
      src:"https://www.keralatourism.org/images/homecontentimage/desktop/MANNANAM-1.jpg"
    },
    {
      id:5,
      name:"Vyloppilli Samskrithi Bhavan",
      src:"https://www.keralatourism.org/images/homecontentimage/desktop/vyloppilli-samakrithi-bhavan1.jpg"
    },
    {
      id:6,
      name:"Thekkekudi Cave Temple",
      src:"https://www.keralatourism.org/images/homecontentimage/desktop/thekkekudi_cave_temple1.jpg"
    },
    
  ]

  explore=[
    {
      id:1,
      src:"https://www.keralatourism.org/images/homecontentimage/desktop/Screw-Pine-Weaving1.jpg",
      name:"Responsible Tourism",
    },
    {
      id:2,
      src:"https://www.keralatourism.org/images/homecontentimage/desktop/ayurveda6.jpg",
      name:"Ayurveda",
    },
    {
      id:3,
      src:"https://www.keralatourism.org/images/homecontentimage/desktop/Paragliding.jpg",
      name:"Paragliding",
    },
    {
      id:4,
      src:"https://www.keralatourism.org/images/homecontentimage/desktop/Paragliding.jpg",
      name:"Journey through Forest",
    },
    {
      id:5,
      src:"https://www.keralatourism.org/images/homecontentimage/desktop/scuba-diving1.jpg",
      name:"Scuba Diving",
    },
    {
      id:6,
      src:"https://www.keralatourism.org/images/homecontentimage/desktop/Hiking.jpg",
      name:"Hiking",
    }
  ]
}
