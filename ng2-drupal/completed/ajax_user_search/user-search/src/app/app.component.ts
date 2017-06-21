import { Component } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SearchService]
})
export class AppComponent {

    private searchQuery:string = '';
    private users:any[] = [];

    constructor(private searchService: SearchService) { }

    private doSearch() {
        
        let searchTask = this.searchService.search(this.searchQuery);
        
        searchTask.subscribe(result => {
            if (result.status == 'ok') {
                this.users = result.results;
            } else {
                console.error('There was an error');
            } 
        });

    }



}
