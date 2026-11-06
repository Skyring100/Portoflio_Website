import { Routes } from '@angular/router';
import { GISComponent } from '../component/gis/gis';
import { UnityComponent } from '../component/unity/unity';

export const routes: Routes = [
    {path: 'gis', component: GISComponent, title: "GIS"},
    {path: 'unity', component: UnityComponent, title: "Unity"}
];
