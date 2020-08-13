# jsonfeed-schema [![Build status](https://img.shields.io/travis/sonicdoe/jsonfeed-schema/master.svg)](https://travis-ci.org/sonicdoe/jsonfeed-schema)

> [JSON Schema](http://json-schema.org) for [JSON Feed](https://jsonfeed.org)

The JSON Schema for [JSON Feed Version 1](https://jsonfeed.org/version/1) is in [`schema-v1.json`](./schema-v1.json).

It is also available on npm and RubyGems:

```
$ npm install jsonfeed-schema
```

```js
// Load the latest version:
const jsonfeedSchema = require('jsonfeed-schema')
// {
//   '$schema': 'http://json-schema.org/draft-07/schema#',
//   title: 'JSON Feed',
//   description: 'JSON Feed Version 1',
//   …
// }

// Load a specific version:
const jsonFeedSchemaV1 = require('jsonfeed-schema/v1')
```

```
$ gem install jsonfeed-schema
```

```ruby
require 'jsonfeed/schema'

# Load the latest version:
JSONFeed::SCHEMA
# {
#   "$schema"=>"http://json-schema.org/draft-07/schema#",
#   "title"=>"JSON Feed",
#   "description"=>"JSON Feed Version 1",
#   …
# }

# Load a specific version:
JSONFeed::SCHEMA_V1
```
