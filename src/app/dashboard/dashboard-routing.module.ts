import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';

//components
import {DashboardComponent} from './dashboard.component';

const routes: Route[] = [
    {
        path: '',
        component: DashboardComponent
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
export class DashboardRoutingModule{

}