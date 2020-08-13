const test = require('ava')
const Ajv = require('ajv')

const schema = require('../v1')

const macro = (t, data) => {
  const valid = t.context.ajv.validate(schema, data)
  t.true(valid, t.context.ajv.errorsText())
}

test.beforeEach(t => {
  t.context.ajv = new Ajv()
})

test('simple', macro, require('./examples/v1/simple.json'))
test('podcast', macro, require('./examples/v1/podcast.json'))
test('microblog', macro, require('./examples/v1/microblog.json'))
