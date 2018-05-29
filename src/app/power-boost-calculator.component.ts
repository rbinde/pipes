import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power-boost-calculator',
  template: `
    <h2>Power Boost Calculator</h2>
    <div>Normal power: <input [(ngModel)]="power"></div>
    <div>Boost factor: <input [(ngModel)]="factor"></div>
    <p>
      Super Hero Power: {{power | exponentialStrength: factor}}
    </p>
  `,
  styles: []
})
export class PowerBoostCalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
