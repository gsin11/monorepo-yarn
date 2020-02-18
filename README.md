# monorepo-yarn
React based Monorepo using yarn Integrated with storybook

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

## Structure
<pre>
packages/
|--- core/
|------ Button/
|--------- input.js
|------ Input/
|--------- input.js
|------ package.json
|------ index.js
apps/
|--- app1/
|------ src/
|------ package.json
package.json
lerna.json
</pre>

## Commands
```
$ npm install -g lerna  // Install lerna as global dependency
```
### Application
```
$ yarn install        // Install all the dependencies
$ yarn run bootstrap  // Bootstrap your package dependencies
$ yarn run app1       // This will run first app1 on your local machine -port:3000
$ yarn run build:app1 // Build your application, build files will be available under ./apps/app1/build/
```