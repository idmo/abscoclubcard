# ClubCard Prototype

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

----
This is  prototype that uses ClubCard data to display a purhcase history. It uses static JSON files to demonstrate three different amounts of customert data (named accordinghly: occassional, good, and elite).

### Creating your own JSON files
* Take a CSV and open it in Excel or Numbers.
* Copy all the cells and rows that contain data
* Go to www.convertcsv.com and paste the data into the top field
* Change the name of the file and select the download button
* Place your JSON files into the "/assets" folder of your project.

### Identitfy each JSON File
In order to use the import statement with the JSON files, you will need to add a name to the root level of each. 
* Select the JSON file
* Place a left brace "{" before the first bracket "["
* Place a right brace "}" after the last bracket "]"
* After the first brace, name your file with quotation markes, e.g. "groceries"

Here's a good article on how to include JSON file in an Angular project for versions 2-7. It's different, so definitely read. https://www.angularjswiki.com/angular/how-to-read-local-json-files-in-angular/#step-1
