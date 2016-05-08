import { Component }       from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { SetService } from './service/set.service';
import { SetsComponent } from './component/sets.component';
import { SetDetailsComponent } from './component/set-details.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <a [routerLink]="['Sets']">Sets</a>
    <router-outlet></router-outlet>
  `,
 directives: [ROUTER_DIRECTIVES],
 providers: [
  ROUTER_PROVIDERS,
  SetService
]
})

@RouteConfig([
  {
    path: '/detail/:id',
    name: 'SetDetails',
    component: SetDetailsComponent
  },
  {
    path: '/sets',
    name: 'Sets',
    component: SetsComponent,
    useAsDefault: true
  }
])

export class AppComponent {
  title = 'Sets of words';
}