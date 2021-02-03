import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StandbyScreenComponent } from './standby-screen.component';

const routes: Routes = [
    {
        path: '',
        component: StandbyScreenComponent,
        data: {
            title: 'Particulas',
        },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class StandbyScreenRoutingModule {}
