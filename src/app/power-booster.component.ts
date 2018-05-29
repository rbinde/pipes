import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power-booster',
  template: `
    <h2>Power Booster</h2>
    <p>Super power boost: {{2 | exponentialStrength: 10}}</p>
  `,
  styles: []
})
export class PowerBoosterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
