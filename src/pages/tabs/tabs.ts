import { Component } from '@angular/core'
import { Favorites } from '../favorites/favorites';
import { Library } from '../library/library';


@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html'
})

export class Tabs {
    favoritesPage = Favorites;
    LibraryPage = Library;

}