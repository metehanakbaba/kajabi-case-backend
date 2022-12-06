/**
 * If we run dev, it will execute the app.ts file in our src folder with nodemon,
 * build will create a build folder in the root of our project with our compiled Typescript code,
 * and start will execute the app.js compiled file in our build folder.
 */

const path = require('path')

const tsConfigPaths = require('tsconfig-paths')

const tsConfig = require('./tsconfig.json')

const baseUrl = path.join(__dirname, 'build') // This will get the absolute path for the build folder

tsConfigPaths.register({
    baseUrl, // We're setting the base url
    paths: tsConfig.compilerOptions.paths // Here we're calling for the paths in our tsconfig.json
})