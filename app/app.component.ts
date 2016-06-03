import { Component }       from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { SetService } from './service/set.service';
import { SetsComponent } from './components/sets.component';
import { SetDetailsComponent } from './components/set-details.component';
import { SetFlashCardsComponent } from './components/set-flashcards.component';
import { HTTP_PROVIDERS }    from '@angular/http';
import { provide }           from '@angular/core';

@Component({
    selector: 'my-app',
    styleUrls: ['style.css'],
    template: `
    <nav>
        <ul class="top">
            <li><a [routerLink]="['Sets']">Sets</a></li>
        </ul>
    </nav>
    <router-outlet></router-outlet>
  `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        SetService,
        HTTP_PROVIDERS
    ]
})

@RouteConfig([
    {
        path: 'set/detail/:id',
        name: 'SetDetails',
        component: SetDetailsComponent
    },
    {
        path: '/sets',
        name: 'Sets',
        component: SetsComponent,
        useAsDefault: true
    },
    {
        path: 'set/flashcards/:id',
        name: 'FlashCards',
        component: SetFlashCardsComponent
    }
])

export class AppComponent {
    title = 'Sets of words';
}