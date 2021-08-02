# ANGULAR APP TEMPLATE

## Goal



## Plan of the presentation

I explain with all the details how I build the project and my way of working.

- [Experiences](#experiences)
- [Documentation](#documentation)
- [Organization](#organization)
- [Development](#development)
- [Running](#running)
- [Commands](#commands)

## Experiences

- **Experience1**: Playing with the single FormsModule
- **Experience2**: Playing with a FormGroup
- **Experience3**: ?
- **Experience4**: Validation on a reactive form (Custom validator and css classes)
- **Experience5**: Cross validation over a reactive form
- **Experience6**: Async validation over a reactive form

## Documentation
#### Code documentation

The jsdoc can be generated locally with the following command :

```
npm run build:docs
```

## Organization
#### Organization of the global folder

| Folder's Name | Description of the folder                               |
| :------------ | :------------------------------------------------------ |
| out           | The documentation generated by jsdoc                    |
| cypress       | Regroup the e2e test of the application                 |
| dist          | Regroup the built application                           |
| src           | Regroup the source code                                 |

#### Organization of the src folder

| Folder's Name | Description of the folder                               |
| :------------ | :------------------------------------------------------ |
| components    | Regroup the components used inside the pages            |
| constants     | Regroup the exported constants                          |
| pages         | Regroup the components representing the pages           |
| services      | Regroup the services of the app                         |
| styles        | Regroup the scss files                                  |


## Development

#### Packages

- **@angular/animations**: For defining web animation
- **@angular/common**: The angular framework (Pipe, directive...)
- **@angular/compiler**: Manage the compilation of the angular file
- **@angular/core**: Implement the core functionnality of the angular (class, decorators...)
- **@angular/forms**: Link between angular and input dom element
- **@angular/platform-browser**: For making angular supported on different browser
- **@angular/platform-browser-dynamic**: Manage the execution of angular in all browser
- **@angular/router**: Manage the router, allow to navigate from one view to another
- **@briebug/jest-schematic**: Configure angular to use Jest for the test
- **rxjs**: Allow to use the observer
- **tslib**: The helper functions for typescript
- **zone.js**: Implement zone (like a thread-local storage for the JS VM)
- **eslint**: For linting the code with EsLint
- **@types/xx**: For getting the type or declaration of some object (use for typescript)
- **eslint**: For linting the code with EsLint
- **@angular-eslint/schematics**: Configure angular for using eslint
- **eslint-config-airbnb**: For having the set of rules airbnb for eslint
- **eslint-config-prettier**: For connecting the prettier to the esLint
- **eslint-plugin-import**: For managing the alias import with eslint
- **cypress**: For managing the e2e test
- **jest**: For managing the test of the application
- **prettier**: For formating the style of the code
- **typescript**: For using typescript
- **sass**: For using the SASS css preprocessor (scss)
- **jsdoc**: For managing the dev documentation of the project
- **@angular/cli**: Allow to use the ng short commands
- **@angular/compiler-cli**: Compile the file generated by the cli
- **@cypress/schematic**: Configure angular for using cypress

## Running

For running the application, one command is needed :

```
npm run start
```

## Commands

- **npm run start**: Run the project
- **npm run dev**: Lint the project and then Run the project
- **npm run build**: Build the project
- **npm run test**: Run the Jest test
- **npm run e2e**: Run the Cypress test
- **npm run linter**: Run the linter
- **npm run linter:fix**: Run the linter and fix the errors
- **npm run build:docs**: Build the documentation from the comments in the code
- **npm run check-update**: Check if the package are up to date
