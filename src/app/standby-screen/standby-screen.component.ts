import * as moment from 'moment';

import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { StandbyScreenService } from './standby-screen.service';

export interface TimeObject {
    abbreviation: string;
    client_ip: string;
    datetime: string;
    day_of_week: number;
    day_of_year: number;
    dst: boolean;
    dst_from: any;
    dst_offset: number;
    dst_until: any;
    raw_offset: number;
    timezone: string;
    unixtime: number;
    utc_datetime: string;
    utc_offset: string;
    week_number: number;
}

@Component({
    templateUrl: './standby-screen.component.html',
    styleUrls: ['./standby-screen.component.scss'],
})
export class StandbyScreenComponent implements OnInit {
    private _birthday = moment('2021-03-31');
    private _interval;
    private _innerWidth: any;

    timeLeft: string;
    openGift = false;

    constructor(private _router: Router, private _standbyScreenService: StandbyScreenService) {}

    ngOnInit(): void {
        this._innerWidth = window.innerWidth;

        this._standbyScreenService.getActualTime().subscribe(
            (res: TimeObject) => {
                const realDate = moment(res.datetime);

                if (moment().diff(realDate, 'minutes') > 10) {
                    alert('Tem que esperar 😠');
                    return;
                }

                this._interval = setInterval(() => this._calculateTimeLeft(), 500);
            },
            (err) => {
                alert(err);
                console.error(err);
            }
        );
    }

    private _calculateTimeLeft(): void {
        const now = moment();

        if (this._birthday.diff(now, 'seconds') <= 0) {
            this.openGift = true;
            clearInterval(this._interval);
            this._router.navigate(['/gift'], { replaceUrl: true });
            return;
        }

        const days: number = this._birthday.diff(now, 'days');
        const hours: number = this._birthday.diff(now, 'hours') % 24;
        const minutes: number = this._birthday.diff(now, 'minutes') % 60;
        const seconds: number = this._birthday.diff(now, 'seconds') % 60;

        const daysString: string = days === 0 ? '' : days === 1 ? '1 dia, ' : days + ' dias, ';
        const hoursString: string = days === 0 && hours === 0 ? '' : hours === 1 ? '1 hora, ' : hours + ' horas, ';
        const minutesString: string = days === 0 && hours && minutes === 0 ? '' : minutes === 1 ? '1 minuto e ' : minutes + ' minutos e ';
        const secondsString: string = seconds === 1 ? '1 segundo' : seconds + ' segundos';

        const br = this._innerWidth > 700 ? '' : '<br/>';

        this.timeLeft = `Faltam:${br}${daysString}${br}${hoursString}${br}${minutesString}${br}${secondsString}`;
    }
}
