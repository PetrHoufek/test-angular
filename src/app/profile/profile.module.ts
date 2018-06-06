import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

//modules
import {ProfileRoutingModule} from './profile-routing.module';
import {SharedModule} from '../shared/shared.module';

//components
import {ProfileComponent} from './profile.component'

@NgModule({
    imports: [
        CommonModule,
        ProfileRoutingModule,
        SharedModule
    ],
    declarations: [
        ProfileComponent
    ]
})
export class ProfileModule{

}