import { Component, Input } from '@angular/core';
import { Hero } from '../heroes/heroes.component';
import { HEROES } from '../mock-heros';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  @Input() hero?: Hero; 

}
