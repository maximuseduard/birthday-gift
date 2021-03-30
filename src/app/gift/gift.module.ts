import { CommonModule } from '@angular/common';
import { GiftComponent } from './gift.component';
import { GiftRoutingModule } from './gift.routing.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [GiftComponent],
    imports: [CommonModule, GiftRoutingModule, RouterModule],
})
export class GiftModule {}
