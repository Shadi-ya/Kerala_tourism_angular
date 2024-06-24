import { Component } from '@angular/core';
import { IndividualDistrictCardComponent } from '../../components/individual-district-card/individual-district-card.component';

@Component({
  selector: 'app-districts',
  standalone: true,
  imports: [IndividualDistrictCardComponent],
  templateUrl: './districts.component.html',
  styleUrl: './districts.component.scss'
})
export class DistrictsComponent {
  district_full=[
    {
      id:1,
      src:"images/ekm1.jpg",
      name:"Ernakulam",
    },
    {
      id:2,
      src:"images/tvm1.jpg",
      name:"Thiruvananthapuram",
    },
    {
      id:3,
      src:"images/wynd1.jpg",
      name:"Wayanad",
    },
    {
      id:4,
      src:"images/alp1.jpg",
      name:"Alappuzha",
    },
    {
      id:5,
      src:"images/idk1.jpg",
      name:"Idukki",
    },
    {
      id:6,
      src:"images/klm1.jpg",
      name:"Kollam",
    },
    {
      id:7,
      src:"images/kzk1.jpg",
      name:"Kozhikode",
    },
    {
      id:8,
      src:"images/knr1.jpg",
      name:"Kannur",
    },
    {
      id:9,
      src:"images/plk1.jpg",
      name:"Palakkad",
    },
    {
      id:10,
      src:"images/tsr1.jpg",
      name:"Thrissur",
    },
    {
      id:11,
      src:"images/ptm1.jpg",
      name:"Pathanamthitta",
    },
    {
      id:12,
      src:"images/mlp1.jpg",
      name:"Malappuram",
    },
    {
      id:13,
      src:"images/ktm1.jpg",
      name:"Kottayam",
    },
    {
      id:14,
      src:"images/ksd1.jpg",
      name:"Kasaragod",
    }

  ]
}
