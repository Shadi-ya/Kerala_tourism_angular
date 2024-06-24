import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-individual-district-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './individual-district-card.component.html',
  styleUrl: './individual-district-card.component.scss'
})
export class IndividualDistrictCardComponent {
  @Input() district_details!: { id: number;src:string; name: string};
}
