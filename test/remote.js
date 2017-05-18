import test from 'ava'
import Ajv from 'ajv'
import got from 'got'

import schema from '..'

const macro = (t, url) => {
  return got(url, { json: true }).then(res => {
    const valid = t.context.ajv.validate(schema, res.body)
    t.true(valid, t.context.ajv.errorsText())
  })
}

test.beforeEach(t => {
  t.context.ajv = new Ajv()
})

test('shapeof.com', macro, 'http://shapeof.com/feed.json')
test('flyingmeat.com', macro, 'http://flyingmeat.com/blog/feed.json')
test('maybepizza.com', macro, 'http://maybepizza.com/feed.json')
test('daringfireball.net', macro, 'https://daringfireball.net/feeds/json')
test('hypercritical.co', macro, 'http://hypercritical.co/feeds/main.json')
test('inessential.com', macro, 'http://inessential.com/feed.json')
test('manton.org', macro, 'https://manton.org/feed/json')
// Item IDs are numbers instead of strings.
test.skip('micro.blog', macro, 'https://micro.blog/feeds/manton.json')
test('timetable.manton.org', macro, 'http://timetable.manton.org/feed.json')
test('therecord.co', macro, 'http://therecord.co/feed.json')
test('allenpike.com', macro, 'http://www.allenpike.com/feed.json')
