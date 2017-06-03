# jsonfeed-schema [![Build status](https://img.shields.io/travis/sonicdoe/jsonfeed-schema.svg)](https://travis-ci.org/sonicdoe/jsonfeed-schema)

> [JSON Schema](http://json-schema.org) for [JSON Feed](https://jsonfeed.org)

The JSON Schema for [JSON Feed Version 1](https://jsonfeed.org/version/1) is in [`schema-v1.json`](./schema-v1.json).

It is also available on npm:

```
$ npm install jsonfeed-schema
```

```js
const jsonfeedSchema = require('jsonfeed-schema')
// {
//   '$schema': 'http://json-schema.org/draft-06/schema#',
//   title: 'JSON Feed',
//   description: 'JSON Feed Version 1',
//   …
// }
```
