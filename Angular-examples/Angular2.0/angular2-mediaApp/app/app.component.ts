import {Component} from 'angular2/core';
import {MediaItemComponent} from './media-item.component'

@Component({
    //meta data below
    selector: 'app',
    directives : [MediaItemComponent],
    template: `
                <h1>My First Angular 2 App</h1>
                <media-item [mediaItem]="firstMediaItem"></media-item>
                `
})
export class AppComponent {
    firstMediaItem = {
        id : 1,
        name : "Droid",
        medium : "series",
        category : "Fiction",
        year : 2008,
        watchedOn : 12345666777,
        isFavourite :true
    };
}