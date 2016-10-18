import { Component } from '@angular/core';
import { upgradeAdapter } from './upgrade_adapter';

@Component({
  selector: 'mock-component',
  template: `
    <div>{{title}}</div>
    `
})

export class MockComponent {
  title = 'Angular 2 mock component';
}
