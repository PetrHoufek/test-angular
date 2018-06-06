import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router'

//components
import {ProfileComponent} from './profile.component';

const routes: Route[] = [
    {
        path: 'profile/:id',
        component: ProfileComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ProfileRoutingModule{

}