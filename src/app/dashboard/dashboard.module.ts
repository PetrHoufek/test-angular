import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

//components
import {DashboardComponent} from './dashboard.component';
import {ProfileTableComponent} from './components/profile-table.component';

//modules
import {DashboardRoutingModule} from './dashboard-routing.module';
import {NgxPaginationModule} from 'ngx-pagination';
import {SharedModule} from '../shared/shared.module';
@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        NgxPaginationModule,
        SharedModule
    ],
    declarations: [
        DashboardComponent,
        ProfileTableComponent
    ],
    providers: [
    ]
})
export class DashboardModule{

}