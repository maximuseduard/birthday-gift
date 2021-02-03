import { filter, map } from 'rxjs/operators';

import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    constructor(private _activatedRoute: ActivatedRoute, private _router: Router, private _titleService: Title) {}

    ngOnInit(): void {
        // ##### Page title alias #####
        this._router.events
            .pipe(filter((event) => event instanceof NavigationEnd))
            .pipe(map(() => this._activatedRoute))
            .pipe(
                map((route) => {
                    while (route.firstChild) {
                        route = route.firstChild;
                    }
                    return route;
                })
            )
            .subscribe((event) => {
                this._titleService.setTitle(event['title'] || 'Presente!');
            });
    }
}
