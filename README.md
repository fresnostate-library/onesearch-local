# OnesearchLocal
Provides a angular2 implementation of OneSearch (formerly Primo) searchbox that can be embedded on library's page.
All feedback welcome.

## prerequisites
1. Must have node.js and npm installed.  Run npm install to get all the dependencies.
2. You should probably know some angular2 or want to learn some. That said, if you don't know any angular2 but you got primo-explore-devenv working, then you can probably get this going.

## Command Line Tools
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.4.
### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Customizing it for your institution
* Run npm install from the project folder to get dependencies
`npm install`

* Build existing project for development
   `ng serve`
   
* Point your web browser to the local addesss cited in the build output.  e.g http://localhost:4200/

* Edit the URLs in both app.component.ts and app.component.html to reflect your instituion.  You may have differnent scopes as well, so it may not be enough to simply edit the existing links. You may need to make a few using the existing ones as a model.

* The project should build and display changes for each edit you save. Once you are happy with the output build for production.
   `ng build --prod`
* Copy js output of build command in the dist directory to your web server.  You can place them wherevery you want as long as you know how to build the path to them.

* Link to those js files from the footer of the webpages where you will use the search box. You can get the boilerplate for those from the html file output from the build command.

* Place the "&lt;app-root&gt;Loading . . .&lt;/app-root&gt;" where you want the seach box to appear in the HTML.




