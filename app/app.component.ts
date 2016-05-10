import { Component }       from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { SetService } from './service/set.service';
import { SetsComponent } from './component/sets.component';
import { SetDetailsComponent } from './component/set-details.component';

import { HTTP_PROVIDERS }    from '@angular/http';
import { provide }           from '@angular/core';
import { XHRBackend }        from '@angular/http';
// in-memory web api imports
import { InMemoryBackendService,
    SEED_DATA }          from 'angular2-in-memory-web-api/core';
import { SetData }          from './set-data';
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
        SetService,
        HTTP_PROVIDERS,
        // in-memory web api providers
        provide(XHRBackend, { useClass: InMemoryBackendService }), // in-mem server
        provide(SEED_DATA, { useClass: SetData }) // in-mem server data

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