import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filterarray'
})
export class FilterArrayPipe implements PipeTransform{

    transform(values: any[], enabled?: string, visible?: string, country?: string): any[]{
        if(!values){
            return;
        }
        let val = values.filter(e => {
            //filter by enabled
            if(enabled != undefined && enabled != ""){
                if(('' + e.is_enabled) != enabled){
                    return false;
                }
            }
            //filter by visible
            if(visible != undefined && visible != ""){
                if(('' + e.is_visible) != visible){
                    return false;
                }
            }
            //filter by country
            if(country != undefined && country != ""){

                if(!e.nationalities){
                    return false;
                }
                let found: boolean = false;
                e.nationalities.forEach(f => {
                    if(f.country_name && f.country_name.toLowerCase() == country.toLowerCase()){
                        found = true;
                    }
                });
                return found;
            }
            return true;
        });
        return val;
    }

}