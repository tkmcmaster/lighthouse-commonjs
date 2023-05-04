# active-monitoring-lighthouse


Run:
```
$ npm ci
$ npm run test
```

Expected: Test should process via lighthouse
```
[0-0] runLighthouse import
[0-0] runLighthouse startFlow imported
[0-0] runLighthouse got flow

...
```

Actual:
```
[0-0] RUNNING in chrome - file:///build/test/ligthousewdio.spec.js
[0-0] runLighthouse import
[0-0] single page error Error [ERR_REQUIRE_ESM]: require() of ES Module /home/mcmaster/lighthouse-commonjs/node_modules/lighthouse/core/index.js from /home/mcmaster/lighthouse-commonjs/build/test/ligthousewdio.spec.js not supported.
[0-0] Instead change the require of index.js in /home/mcmaster/lighthouse-commonjs/build/test/ligthousewdio.spec.js to a dynamic import() which is available in all CommonJS modules.

...
```