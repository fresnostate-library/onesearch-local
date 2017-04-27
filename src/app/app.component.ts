import { Component } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // magnifyGlassIcon = '<svg id="magnifying-glass_cache70" width="100%" height="100%" viewBox="0 0 24 24" y="264" style="transform:scale(-1,1)" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"></path></svg>';
  searchStr = "";
  encodedString ="";
  displayScopes= false;
// constructor (@Inject('Window') window: Window) {}


  searchChange(changedString) {
    this.searchStr = changedString;
    this.encodedString = this.searchStr.replace('&','%26');

    if(this.searchStr.length !=0)
    {
      this.displayScopes = true;
    }
    else
    {
      this.displayScopes = false;
    }
  }


    submitSearch() {
      if (this.searchStr != '') {
      var destination = ('http://csuf-primo.hosted.exlibrisgroup.com/primo-explore/search?query=any,contains,'+ this.encodedString +'&tab=everything&search_scope=EVERYTHING&sortby=rank&vid=01CALS_FUL&lang=en_US&offset=0');
      window.location.href= destination;
    }

  }
    submitAdvancedSearch() {

      window.location.href='http://csuf-primo.hosted.exlibrisgroup.com/primo-explore/search?tab=everything&search_scope=EVERYTHING&sortby=rank&vid=01CALS_FUL&lang=en_US&mode=advanced&offset=0';

  }

}
