import * as moment from 'moment';

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';

@Component({
    templateUrl: './gift.component.html',
    styleUrls: ['./gift.component.scss'],
})
export class GiftComponent implements OnInit {
    @ViewChild('password') password: ElementRef;

    private _birthday = moment('2021-03-31');

    allowAccess = false;

    constructor(private _router: Router) {}

    ngOnInit(): void {
        const now = moment();

        if (this._birthday.diff(now, 'seconds') > 0) {
            this._router.navigate(['/'], { replaceUrl: true });
            return;
        }
    }

    checkPassword(): void {
        if (this.password.nativeElement.value === 'SSLopes') {
            this.allowAccess = true;
        } else {
            alert('Senha inválida');
        }
    }
}
