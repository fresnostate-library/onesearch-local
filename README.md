# onesearch-local
Provides a anuglar2 implementation of OneSearch (formerly Primo) searchbox that can be embedded on library's page.
All feedback welcome.



## prerequisites
1. Must have node.js and npm installed.  Run npm install to get all the dependencies.
2. You should probably know some angular2 want to learn some. That said, if you don't know any angular2 but you got primo-explore-devenv working, then you can probably get this going.

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
You will need to edit the URLs in both app.component.ts and app.component.html to relect your instituion.  You may have differnent scopes as well, so it may not be enough to simply edit the existing links. You may need to make a few using the existing ones as a model.


