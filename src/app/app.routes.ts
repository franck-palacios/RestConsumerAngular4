import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddComponent } from './components/add/add.component';
const APP_ROUTES: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'add',
        component:AddComponent
    }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });