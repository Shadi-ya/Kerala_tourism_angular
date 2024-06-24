import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DistrictPageComponent } from './pages/district-page/district-page.component';
import { DistrictsComponent } from './pages/districts/districts.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { AuthComponent } from './pages/auth/auth.component';

export const routes: Routes = [
    {
        path:'',component:HomeComponent
    },
    {
        path:'districts',component:DistrictsComponent
    },
    {
        path:'auth',component:AuthComponent
    },
    {
        path:'district-page/:title',component:DistrictPageComponent
    },
    {
        path:'explore',component:ExploreComponent
    },
];
