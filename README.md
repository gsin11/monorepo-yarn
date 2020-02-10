# monorepo-yarn
React based Monorepo using yarn Integrated with storybook

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

## Structure
<pre>
packages/
|--- comp-1/
|    |-- src/
|    |-- package.json
|--- comp-2/
|    |-- src/
|    |-- package.json
apps/
|--- app-1/
|    |-- src/
|    |-- package.json
|--- app-2/
     |-- src/
     |-- package.json
package.json
lerna.json
babel.config.js
</pre>

## Commands
```
$ npm install -g lerna  // Install lerna as global dependency
```
### Application
```
$ yarn install        // Install all the dependencies
$ yarn run bootstrap  // Bootstrap your package dependencies
$ yarn run storybook  // Run storybook on port=5555
```