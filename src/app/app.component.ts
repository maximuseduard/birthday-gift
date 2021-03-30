import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';

import { Title } from '@angular/platform-browser';
import { Track } from 'ngx-audio-player';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
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
            title: 'Recairei',
            link: 'https://dl.dropboxusercontent.com/s/8ertgn5v8wtr044/Os%20Bar%C3%B5es%20da%20pisadinha%20-%20Recairei.mp3?dl=0',
            duration: 183,
            artist: 'Barões da pisadinha',
        },
        {
            title: 'That’s What I Like',
            link: 'https://dl.dropboxusercontent.com/s/m21az0ujzp44zgd/Bruno%20Mars%20-%20That%E2%80%99s%20What%20I%20Like.mp3?dl=0',
            duration: 167,
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
