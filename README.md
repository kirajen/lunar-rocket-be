# Lunar Rocket Backend

## Prerequisites

To run the app you will need a compatible version of node.js (16.x.x is recommended) and npm and install TypeScript. An
internet connection is required to connect to the cloud hosted MongoDB instance.

## Running the app

### Before you run

- Create a .env file. Use the *.example.env* as an example. The *.example.env* includes the connection string for
  connecting to the cloud version of mongodb, and all IPs have been whitelisted.
- Run `npm install` to install dependencies. This will create the node_modules folder.
- Run the `npm build` script as defined in *package.json* to transpile the TypeScript code to javascript. This will
  create the dist folder. This can also be done by running `tsc` from the root directory of the project.

### Running the app

- Run `npm start` to trigger the start script defined in *package.json*. By default the app runs on port 3000.
- Swagger was used for API documentation. To access the swagger UI, navigate to `localhost:3000/api-docs`. The
  documentation includes the expected schemas and examples.

## Testing the app

The app includes multiple test suites created with jest. To run the tests run `npm test` to trigger the script defined
in the *package.json* file.