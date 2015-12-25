'use strict'

/*!
 * imports.
 */

var curry2 = require('curry2')

/*!
 * exports.
 */

module.exports = curry2(last)

/**
 * Returns a new shallow copy of the last n elements taken from the the end of the given array.
 * When list.length < n the list returned contain list.length elements.
 *
 * @param {Number} n
 * Number of elements to take from the end of the list.
 *
 * @param {Array} list
 * Array to extract elements from.
 *
 * @return {Array}
 * Copy of the last n elements taken from the end of list.
 */

function last (n, list) {
  return list.slice(-n)
}
