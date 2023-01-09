## Rick & Morty Client Demo Application

Rick & Morty Client Demo Application using [GraphQL API](https://rickandmortyapi.com/documentation/#graphql).

### Features

- The app has a search bar with results shown below.
- When the user types something into the search bar they should be presented with suggested character names.
- If the user presses enter, the character results for the entered search term are shown.
- If the user clicks on one of the suggestions, the results for that suggestion are shown.

### Running from release

In the [Releases](https://github.com/ibarroso/DemoGraphQlClient/releases) section, there is a Client Demo v1.0.0 from which a build.zip file can be downloaded. Uncompressing the file and executing "Index.html" will lauch the application locally in the default browser.

### Building and running from source

This demo application requires [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) package manager. NodeJS version v18.13.0 has been used to develop the application, thus v18+ of NodeJS are guaranteed to work as expected.

Install project dependecies

```sh
cd C:\path\to\directory\app
npm install
```

Run project in a development environment

```sh
cd C:\path\to\directory\app
npm start
```

Create a production build and run the app locally in the default browser

```sh
cd C:\path\to\directory\app
npm run build
cd build
.\index.html
```

### License

MIT
