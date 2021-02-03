import * as moment from 'moment';
import { Track } from 'ngx-audio-player';

import { Component, OnInit } from '@angular/core';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';

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

    showAudioPlayer = false;
    timeLeft: string;

    faHeadphones = faHeadphones;

    audioPlayerPageSizeOptions = [10, 20];
    audioPlayerPlaylist: Track[] = [
        {
            title: 'Pisadinha - Deus Proverá',
            link: 'https://dl.dropboxusercontent.com/s/028mzhw6bgd78xi/PISADINHA%20-%20DEUS%20PROVER%C3%81.mp3?dl=0',
            duration: 246,
        },
        {
            title: 'Good news',
            link: 'https://dl.dropboxusercontent.com/s/f5q4cq5q0c7hmpa/Apashe%20-%20Good%20news.mp3?dl=0',
            duration: 284,
            artist: 'Apashe',
        },
        {
            title: 'Não Fica Apaixonadinha',
            link: 'https://dl.dropboxusercontent.com/s/zixx4w1mula5kis/MC%20Lorenzo%20-%20N%C3%A3o%20Fica%20Apaixonadinha.mp3?dl=0',
            duration: 183,
            artist: 'MC Lorenzo',
        },
        {
            title: 'That’s What I Like',
            link: 'https://dl.dropboxusercontent.com/s/m21az0ujzp44zgd/Bruno%20Mars%20-%20That%E2%80%99s%20What%20I%20Like.mp3?dl=0',
            duration: 210,
            artist: 'Bruno Mars',
        },
        {
            title: 'Something Just Like This',
            link:
                'https://dl.dropboxusercontent.com/s/2z2vyi8g3416s7t/The%20Chainsmokers%20%26%20Coldplay%20-%20Something%20Just%20Like%20This.mp3?dl=0',
            duration: 248,
            artist: 'The Chainsmokers & Coldplay',
        },
        {
            title: 'Moonlight Sonata',
            link: 'https://dl.dropboxusercontent.com/s/z8kb9q664i62zi9/Beethoven%20-%20Moonlight%20Sonata.mp3?dl=0',
            duration: 1046,
            artist: 'Beethoven',
        },
        // {
        //     title: 'In Love',
        //     link: 'https://dl.dropboxusercontent.com/s/9v0psowra7ekhxo/A%20Himitsu%20-%20In%20Love%20%28feat.%20Nori%29.flac?dl=0',
        // },
        // {
        //     title: 'On & On (feat. Daniel Levi) [NCS Release]',
        //     link: 'https://dl.dropboxusercontent.com/s/w99exjxnwoqwz0e/Cartoon-on-on-feat-daniel-levi-ncs-release.mp3?dl=0',
        // },
    ];

    constructor(private _standbyScreenService: StandbyScreenService) {}

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

        if (this._birthday.diff(now, 'seconds') === 0) {
            console.log('open gift');
            clearInterval(this._interval);
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
