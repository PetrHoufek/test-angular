import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

const dataUrl: string = './assets/db.json';

export interface Profile{
    summary: string;
    profile_type_key: string;

    thumbnail: {
        author_name: string;
        file: string;
        content_size: string;
        width: number;
        id: number;
        height: number;
    };
    is_visible: boolean;
    profile_url: string;
    last_name: string;
    language: string;

    nationalities: [
        {
          country_code: string;
          country_name: string;
          country_slug: string;
          country_id: number;
        }
    ],
    profile_sub_title: string;
    is_enabled: boolean;
    country_code: string;

    assets: [
        {
          path: string;
          size: number;
          width: number;
          index: any;
          caption: any;
          source: any;
          type: string;
          height: number;
          is_thumbnail: boolean;
        }
    ],
    profile_title: string;
    profile_type_id: number;
    profile_slug: string;
    id: number;
    country_name: string;
    first_name: string;
    profile_type_name: string;
}

@Injectable()
export class HttpService{

    profiles: Profile[];

    constructor(
        private http: Http
    ){
        this.init();
    }

    init(){
        return this.get(dataUrl).toPromise().then(e => {
            if(!this.profiles){
                this.profiles = JSON.parse(e.text()).profiles;
            }
        });
    }

    get(url: string): Observable<any>{
        return this.http.get('./assets/db.json');
    }

    getProfiles(): Profile[]{
        return this.profiles;
    }

    /**
     * The rows on dashboard are loaded from the same source as the profiles here and the ID parameter in the route is mandatory.
     * Therefore it cannot happen that this method would be called with a non-existend/no ID.
     * 
     */
    getProfile(id: number): Profile{
        return this.profiles.find((e: Profile) => {
            if(e.id == id){
                return true;
            }
        });
    }

}