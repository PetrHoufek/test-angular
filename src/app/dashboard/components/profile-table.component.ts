import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';

//services
import {HttpService} from '../../core/services/http.service';

@Component({
    selector: 'profile-table',
    templateUrl: './profile-table.component.html',
    styleUrls: ['./profile-table.component.scss']
})
export class ProfileTableComponent implements OnInit{

    currentPage: number = 1;
    enabled: boolean;
    visible: boolean;
    country: string;
    countries: string[];

    constructor(
        private router: Router,
        private httpService: HttpService
    ){

    }

    ngOnInit(){
        /**Nationalization would be a problem here if these values are hardcoded, in JAVA, you can use
         * external configuration files to get the right set a strings basec on the location of the user.
         * Another option would be to go trough all of the profiles, read their nationalities and save them into an array(erase duplicates).
         * Another option would be to use a text search field instead of combo box.
         */
        this.countries = require('../../../assets/countries.json');
        console.log(this.countries);
    }

    isRowOdd(i: number){
        return i % 2 === 0;
    }

    viewProfile(id: number){
        if(id){
            //{relativeTo: this.activatedRoute} is not needed here
            this.router.navigate(['profile', id]);
        }
    }

}