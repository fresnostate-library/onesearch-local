import { Component } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  /* ### Customize these variables for your campus. ### */
  primoBaseUrl = "http://csuf-primosb.hosted.exlibrisgroup.com/primo-explore/";
  primoPlaceholder = "Search Anything";
  primoView = "01CALS_FUL";

  tabTxtDefault = "OneSearch Articles, Books & More";
  tabTxtArticles = "Articles";
  tabTxtBooksLocal = "Books & Media (CSUF)";
  tabTxtBooksNetwork = "Books & Media (all CSU)";
  tabTxtCourseReserves = "Course Reserves (CSUF)";
  scopesCount = 5;
  /* ### Do NOT change these variables. ### */
  displayScopes = false;
  encodedString = "";
  searchStr = "";
  foci = null;

  constructor() {
    this.foci = new KeyedCollection<Boolean>();

  }

  focusCheck(event) {
    console.log("focusing" + event.srcElement.attributes.id.value);
    this.foci.Add(event.srcElement.attributes.id.value, true);
    this.determineScopesDisplay();
  }
  blurCheck(event) {
    console.log("blurring" + event.srcElement.attributes.id.value);
    this.foci.Remove(event.srcElement.attributes.id.value, true);
    console.log(this.foci.count)

    if (this.foci.count < 1) {
      this.displayScopes = false;
    }
  }

  searchChange(changedString) {
    this.cleanSearch(changedString);
    this.determineScopesDisplay()

  }

  cleanSearch(rawSearch) {
    this.searchStr = rawSearch;
    this.encodedString = this.searchStr.replace('&', '%26');
    return this.encodedString;
  }

  submitSearch(rawSearch) {
    if (this.searchStr != '') {
      var destination = (this.primoBaseUrl + 'search?query=any,contains,' + this.cleanSearch(rawSearch) + '&tab=everything&search_scope=EVERYTHING&sortby=rank&vid=' + this.primoView + '&lang=en_US&offset=0');
      window.location.href = destination;
    }
  }

  submitAdvancedSearch() {
    window.location.href = this.primoBaseUrl + 'search?tab=everything&search_scope=EVERYTHING&sortby=rank&vid=' + this.primoView + '&lang=en_US&mode=advanced&offset=0';
  }


  determineScopesDisplay() {
    console.log("determining scopes display");
    console.log(this.foci.count);
    if (this.searchStr.length != 0 && this.foci.count > 0) {
      this.displayScopes = true;
    }
    else {
      this.displayScopes = false;
    }

  }


  onKeydown(event) {
    console.log("keyDownFire for: " + event.key);
    console.log("Event Source: " + event.srcElement.attributes.id.value);

    if ((event.key === "ArrowUp" || event.key === "Up" && this.searchStr.length != 0)) {
      let eventSource = parseInt(event.srcElement.attributes.id.value);
      if (eventSource > 0) {
        console.log("focusing on link " + (eventSource - 1));
        let inx = eventSource - 1;
        this.foci.Add(eventSource - 1, true);
        document.getElementById(inx.toString()).focus();
      }
      else {
        console.log("running else for up ");
        this.foci.Add(((this.scopesCount-1)).toString(), true);
        document.getElementById((this.scopesCount-1).toString()).focus();
      }
    }
    //Down supports ie11
    if ((event.key === "ArrowDown" || event.key === "Down") && this.searchStr.length != 0) {

      if (event.srcElement.attributes.id.value == "searchBox") {
        console.log("focusing on first link");
        this.foci.Add(event.srcElement.attributes.id.value, true);
        //this.scopes[0].focus();
        document.getElementById("0").focus();
      }
      else if (parseInt(event.srcElement.attributes.id.value) < (this.scopesCount-1)) {
        let eventSource = parseInt(event.srcElement.attributes.id.value);
        console.log("focusing on link " + (eventSource + 1));
        let inx = eventSource + 1;
        this.foci.Add(eventSource + 1, true);
        document.getElementById(inx.toString()).focus();
      }
      else {
        console.log("running else statement ");
        this.foci.Add("0", true);
        document.getElementById("0").focus();
      }

    }

  }
  mouseDown(event) {
    console.log("mouseDownFire");
    this.foci.Add(event.srcElement.attributes.id.value, true);
  }

}

//http://www.dustinhorne.com/post/2016/06/09/implementing-a-dictionary-in-typescript
interface IKeyedCollection<T> {
  Add(key: string, value: T);
  ContainsKey(key: string): boolean;
  Count(): number;
  Item(key: string): T;
  Keys(): string[];
  Remove(key: string): T;
  Values(): T[];
}
class KeyedCollection<T> implements IKeyedCollection<T> {
  private items: { [index: string]: T } = {};

  private count: number = 0;

  public ContainsKey(key: string): boolean {
    return this.items.hasOwnProperty(key);
  }

  public Count(): number {
    return this.count;
  }

  public Add(key: string, value: T) {
    this.items[key] = value;
    this.count++;
  }

  public Remove(key: string): T {
    var val = this.items[key];
    delete this.items[key];
    this.count--;
    return val;
  }

  public Item(key: string): T {
    return this.items[key];
  }

  public Keys(): string[] {
    var keySet: string[] = [];

    for (var prop in this.items) {
      if (this.items.hasOwnProperty(prop)) {
        keySet.push(prop);
      }
    }

    return keySet;
  }

  public Values(): T[] {
    var values: T[] = [];

    for (var prop in this.items) {
      if (this.items.hasOwnProperty(prop)) {
        values.push(this.items[prop]);
      }
    }

    return values;
  }
}