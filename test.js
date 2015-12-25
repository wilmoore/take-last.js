'use strict'

/*!
 * imports.
 */

var test = require('tape-catch')

/*!
 * imports (local).
 */

var last = require('./')

/*!
 * tests.
 */

var list = [
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i']
]

/*!
 * tests.
 */

test('last()', function (t) {
  t.deepEqual(last(2, list[0]), ['b', 'c'])
  t.deepEqual(list.map(last(1)), [['c'], ['f'], ['i']])
  t.end()
})
