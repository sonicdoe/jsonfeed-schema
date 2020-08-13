# Changelog

All releases and their notable changes are documented in this file.

## v0.5.0

Adds [JSON Feed Version 1.1](https://jsonfeed.org/version/1.1). `require('jsonfeed-schema')` always loads the latest version. You can load a specific version through `require('jsonfeed-schema/v1')` and `require('jsonfeed-schema/v1.1')`.

- Update JSON Schema to [draft-07](https://json-schema.org/draft-07/json-schema-release-notes.html) ([`4b62107`](https://github.com/sonicdoe/jsonfeed-schema/commit/4b621074ee811c4dee14224fee5a20679c0fcf85))
- Expose version 1 through `require('jsonfeed-schema/v1')` and `JSONFeed::SCHEMA_V1` ([`01895bc`](https://github.com/sonicdoe/jsonfeed-schema/commit/01895bcd8c32d34e5134125fb772bc498b57fe7f) and [`e7bb0c3`](https://github.com/sonicdoe/jsonfeed-schema/commit/e7bb0c39b59470cbb75e2ba1d762583b5421663a))
- Add support for [JSON Feed Version 1.1](https://jsonfeed.org/version/1.1) ([`33c3b3d`](https://github.com/sonicdoe/jsonfeed-schema/commit/33c3b3d1296a0238f19dcd7a0becfd19a917372f))

## v0.4.0 (2017-06-04)

- Update regex for extensions ([`4fc8c74`](https://github.com/sonicdoe/jsonfeed-schema/commit/4fc8c74bfb190802dcc1ca350265401ee2450445))
- Add property descriptions ([`8ed7af8`](https://github.com/sonicdoe/jsonfeed-schema/commit/8ed7af8e578b21db96d2221800f84c87ef6ea16b))
- Add Ruby gem ([`c0bd3f3`](https://github.com/sonicdoe/jsonfeed-schema/commit/c0bd3f31b26f7c8fcb678894ed58527e89da9729))

## v0.3.0 (2017-05-20)

- Specify exact value of `version` property (`https://jsonfeed.org/version/1`) ([`a6c2094`](https://github.com/sonicdoe/jsonfeed-schema/commit/a6c2094aaea9644be7dda2dc895cdc14095e9587))
- Disallow additional properties except extensions ([`ed4909d`](https://github.com/sonicdoe/jsonfeed-schema/commit/ed4909dbef122cd2a999492bb23967d29f346bb4))

## v0.2.0 (2017-05-18)

- Specify URI format where applicable ([`34c9b92`](https://github.com/sonicdoe/jsonfeed-schema/commit/34c9b92a6111363e71e7b064d5aab9c202cdcbe7))
- Specify required properties ([`adaa0a3`](https://github.com/sonicdoe/jsonfeed-schema/commit/adaa0a35cef7807320b06a5655bb6e20dc484b8a))
- Specify minimum number of properties for author ([`0a4de3d`](https://github.com/sonicdoe/jsonfeed-schema/commit/0a4de3d076bb226cdf6a42d8d0dc69aac6bab2fb))
- Require either `content_html` or `content_text` to be present ([`ee620fb`](https://github.com/sonicdoe/jsonfeed-schema/commit/ee620fb10378665be27f18000d1c6e7d515733bd))
- Specify `date-time` format where applicable ([`c87f4e8`](https://github.com/sonicdoe/jsonfeed-schema/commit/c87f4e8d597fdfeec95f2773dc4ce6ee84d07890))

## v0.1.0 (2017-05-17)

- Initial release.
