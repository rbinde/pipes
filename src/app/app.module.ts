import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { PowerBoosterComponent } from './power-booster.component';
import { PowerBoostCalculatorComponent } from './power-boost-calculator.component';
import { FlyingHeroesComponent } from './flying-heroes.component';
import { FlyingHeroesPipe } from './flying-heroes.pipe';
import { FlyingHeroesImpurePipe } from './flying-heroes-impure.pipe';
import { FlyingHeroesImpureComponent } from './flying-heroes-impure.component';

@NgModule({
  declarations: [
    AppComponent,
    ExponentialStrengthPipe,
    PowerBoosterComponent,
    PowerBoostCalculatorComponent,
    FlyingHeroesComponent,
    FlyingHeroesPipe,
    FlyingHeroesImpurePipe,
    FlyingHeroesImpureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
