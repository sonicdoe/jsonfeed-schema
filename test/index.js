import test from 'ava'
import Ajv from 'ajv'

import schema from '..'

const macro = (t, data) => {
  const valid = t.context.ajv.validate(schema, data)
  t.true(valid, t.context.ajv.errorsText())
}

test.beforeEach(t => {
  t.context.ajv = new Ajv()
})

test('simple', macro, require('./examples/simple.json'))
test('podcast', macro, require('./examples/podcast.json'))
test('microblog', macro, require('./examples/microblog.json'))
