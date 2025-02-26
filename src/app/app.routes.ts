import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { FlagComponent } from './flag/flag.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'create', component: CreateUserComponent },
    { path: 'list', component: ListUserComponent },
    { path: 'flag', component: FlagComponent },
    { path: '**', redirectTo: 'home' }
];
