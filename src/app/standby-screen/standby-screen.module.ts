import { NgxAudioPlayerModule } from 'ngx-audio-player';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { StandbyScreenComponent } from './standby-screen.component';
import { StandbyScreenRoutingModule } from './standby-screen.routing.module';
import { StandbyScreenService } from './standby-screen.service';

@NgModule({
    declarations: [StandbyScreenComponent],
    imports: [CommonModule, FontAwesomeModule, MatButtonModule, NgxAudioPlayerModule, StandbyScreenRoutingModule, RouterModule],
    providers: [StandbyScreenService],
})
export class StandbyScreenModule {}
