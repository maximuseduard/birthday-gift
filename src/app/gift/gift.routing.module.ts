import { RouterModule, Routes } from '@angular/router';

import { GiftComponent } from './gift.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: GiftComponent,
        data: {
            title: 'Presente',
        },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class GiftRoutingModule {}
