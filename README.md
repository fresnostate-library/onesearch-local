# onesearch-local
Provides a anuglar2 implementation of OneSearch (formerly Primo) searchbox that can be embedded on library's page.
All feedback welcome.



## prerequisites
1. Must have node.js and npm installed.  Run npm install to get all the dependencies.
2. You should probably know some angular2 or want to learn some. That said, if you don't know any angular2 but you got primo-explore-devenv working, then you can probably get this going.

## Command Line Tools
This project was originally made with angular-cli but the eject command was used to give more control over the webpack process.  Thus, the following commands need to be used in place of the standard ng commands. See output of eject command below

`Ejection was successful.

To run your builds, you now need to do the following commands:
   - "npm run build" to build.
   - "npm run test" to run unit tests.
   - "npm start" to serve the app using webpack-dev-server.
   - "npm run e2e" to run protractor.

Running the equivalent CLI commands will result in an error.
`
## Customizing it for your institution
* Run npm install from the project folder to get dependencies
`npm install`

* Build existing and project for development
   `npm start`
   
* Point your web browser to the local addesss cited in the build output.  e.g http://localhost:8082/

* Edit the URLs in both app.component.ts and app.component.html to reflect your instituion.  You may have differnent scopes as well, so it may not be enough to simply edit the existing links. You may need to make a few using the existing ones as a model.

* The project should build and display changes for each edit you save. Once you are happy with the output build for production.
   `npm run build --prod`
* Copy js output of build command in the dist directory to your web server.  You can place them wherevery you want as long as you know how to build the path to them.

* Link to those js files from the footer of the webpages where you will use the search box. You can get the boilerplate for those from the html file output from the build command.

* Place the "&lt;app-root&gt;Loading . . .&lt;/app-root&gt;" where you want the seach box to appear in the HTML.




