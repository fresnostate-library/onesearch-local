import { Component, ViewChild, ElementRef }  from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  /* ### Customize these variables for your campus. ### */
  primoBaseUrl = "http://csuf-primosb.hosted.exlibrisgroup.com/primo-explore/";
  primoView = "01CALS_FUL";

  tabTxtDefault = "OneSearch Articles, Books & More";
  tabTxtArticles = "Articles";
  tabTxtBooksLocal = "Books & Media (CSUF)";
  tabTxtBooksNetwork = "Books & Media (all CSU)";
  tabTxtCourseReserves = "Course Reserves (CSUF)";

  /* ### Do NOT change these variables. ### */
  displayScopes = false;
  encodedString ="";
  searchStr = "";


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
      var destination = (this.primoBaseUrl + 'search?query=any,contains,' + this.encodedString + '&tab=everything&search_scope=EVERYTHING&sortby=rank&vid=' + this.primoView + '&lang=en_US&offset=0');
      window.location.href= destination;
    }
  }

  submitAdvancedSearch() {
    window.location.href = this.primoBaseUrl + 'search?tab=everything&search_scope=EVERYTHING&sortby=rank&vid=' + this.primoView + '&lang=en_US&mode=advanced&offset=0';
  }
}