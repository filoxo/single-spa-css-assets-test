# single-spa-css-assets-test

This is a troubleshooting repo that allows handling css assets with Webpack in a single-spa application.

- image assets are included in output
- image asset urls in the output css are relative to the deployed application
- font assets are included in output
- font asset urls in the output css are relative to the deployed application
- both images and fonts are found and rendered in the page once the application is mounted

## Verify that the output is correct

### dev mode

- clone repo
- run `yarn install`
- run `yarn start --port 5000`
- go to [](http://single-spa-playground.org/playground/instant-test?name=@test/css&url=5000)
- verify that you can see the background
- verify that you can see the warning icon next to the default text

### prod mode

- run `yarn build`
- move one directory up (eg. `cd ..`)
  - this emulates a deployment where the applications are namespaced by having their own directory.
- run `npx serve --cors`
  - this runs a webserver that is prod-like
- go to [](http://single-spa-playground.org/playground/instant-test?name=@test/css&url=http%3A%2F%2Flocalhost%3A5000%2Fsingle-spa-css-assets-test%2Fdist%2Ftest-css.js)
- verify that you can see the background
- verify that you can see the warning icon next to the default text
