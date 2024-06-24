import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-card',
  standalone: true,
  imports: [],
  templateUrl: './carousel-card.component.html',
  styleUrl: './carousel-card.component.scss'
})
export class CarouselCardComponent {
  @Input() tour!: { id: number;src:string; title: string; description: string};
}
