import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StandbyScreenComponent } from './standby-screen.component';
import { StandbyScreenRoutingModule } from './standby-screen.routing.module';
import { StandbyScreenService } from './standby-screen.service';

@NgModule({
    declarations: [StandbyScreenComponent],
    imports: [CommonModule, StandbyScreenRoutingModule, RouterModule],
    providers: [StandbyScreenService],
})
export class StandbyScreenModule {}
