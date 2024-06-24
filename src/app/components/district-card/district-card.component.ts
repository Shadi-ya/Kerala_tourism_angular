import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-district-card',
  standalone: true,
  imports: [],
  templateUrl: './district-card.component.html',
  styleUrl: './district-card.component.scss'
})
export class DistrictCardComponent {
  @Input() district!: { id: number; name: string; src: string; };
}
