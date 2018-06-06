import {NgModule} from '@angular/core';

//pipes
import {FilterArrayPipe} from './pipes/filter-array.pipe';
import {FormsModule} from '@angular/forms';

//directives
import {HighlightDirective} from '../shared/directives/highlight.directive';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        FilterArrayPipe,
        HighlightDirective
    ],
    exports: [
        FilterArrayPipe,
        FormsModule,
        HighlightDirective
    ]
})
export class SharedModule{
    
}