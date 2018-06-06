import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';

//services
import {HttpService} from './services/http.service';

@NgModule({
    providers: [
        HttpService
    ],
    exports: [
        HttpClientModule,
        HttpModule
    ]
})
export class CoreModule{

}