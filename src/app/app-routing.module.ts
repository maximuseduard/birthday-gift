import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./standby-screen/standby-screen.module').then((m) => m.StandbyScreenModule),
            },
        ],
    },
    {
        path: 'gift',
        component: AppComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./gift/gift.module').then((m) => m.GiftModule),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
