import { Component, OnInit } from '@angular/core';
import { FlyingHeroesComponent } from './flying-heroes.component';

@Component({
  selector: 'app-flying-heroes-impure',
  templateUrl: './flying-heroes-impure.component.html',
  styles: ['.flyers, .all {font-style: italic}'],
})
export class FlyingHeroesImpureComponent extends FlyingHeroesComponent {
  title = 'Flying Heroes (impure pipe)';
}
