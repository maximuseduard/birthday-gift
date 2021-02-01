import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TimeObject } from './standby-screen.component';

@Injectable()
export class StandbyScreenService {
    constructor(private _http: HttpClient) {}

    getActualTime(): Observable<TimeObject> {
        return this._http.get('http://worldtimeapi.org/api/timezone/America/Sao_Paulo') as Observable<TimeObject>;
    }
}
