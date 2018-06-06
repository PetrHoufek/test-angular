import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

//services
import {Profile, HttpService} from '../core/services/http.service';

@Component({
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
    
    profile: Profile;

    constructor(
        private activatedRoute: ActivatedRoute,
        private httpService: HttpService
    ){

    }

    ngOnInit(){
        let params: Params = this.activatedRoute.params;
        if(params){
            this.httpService.init().then(e => {
                this.profile = this.httpService.getProfile(+params.value['id']);
                this.ensureProfileStructure();
            });
        }
    }

    ensureProfileStructure(){
        if(!this.profile.nationalities || (<any[]>this.profile.nationalities).length == 0){
            this.profile.nationalities = [
                {
                    country_code: undefined,
                    country_id: undefined,
                    country_name: undefined,
                    country_slug: undefined
                }
            ]
        }
    }

}