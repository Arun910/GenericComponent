import { Routes } from '@angular/router';
import { Parent2Component } from './parent2/parent2.component';
import { Parent1Component } from './parent1/parent1.component';
 // Adjust the path if needed

export const routes: Routes = [
    { path: 'parent1', component: Parent1Component },
    { path: 'parent2', component: Parent2Component },
    { path: '', redirectTo: '/parent1', pathMatch: 'full' }
];
