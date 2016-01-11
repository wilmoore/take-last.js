# take-last
> Returns a new shallow copy of the last n elements taken from the end of the given array. When list.length < n the list returned contain list.length elements.

[![Build Status](http://img.shields.io/travis/wilmoore/take-last.js.svg)](https://travis-ci.org/wilmoore/take-last.js) [![Code Climate](https://codeclimate.com/github/wilmoore/take-last.js/badges/gpa.svg)](https://codeclimate.com/github/wilmoore/take-last.js) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

```shell
npm install take-last --save
```

> You can also use Duo, Bower or [download the files manually](https://github.com/wilmoore/take-last.js/releases).

###### npm stats

[![npm](https://img.shields.io/npm/v/take-last.svg)](https://www.npmjs.org/package/take-last) [![NPM downloads](http://img.shields.io/npm/dm/take-last.svg)](https://www.npmjs.org/package/take-last) [![David](https://img.shields.io/david/wilmoore/take-last.js.svg)](https://david-dm.org/wilmoore/take-last.js)

## Overview

Returns `expr1` if it can be converted to true; otherwise, returns `expr2`. Thus, when used with Boolean values, || returns true if either operand is true; if both are false, returns false.

## API Example

###### Pointful

```js
var last = require('take-last')
last(2, ['a', 'b', 'c'])
//=> ['b', 'c']
```

###### Pointfree Style

```js
var last = require('take-last')
var list = [ ['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i'] ]

list.map(last(1))
//=> [['c'], ['f'], ['i']]
```

## API

### `last(n, list)`

###### arguments

 - `n (number)` Number of elements to take from the end of the list.
 - `list (array)` Array to extract elements from.

###### returns

 - `(array)` Returns copy of the last `n` elements taken from the end of `list`.

## Related

 - [array-head]

## Alternatives

 - [_.takeRight]
 - [R.takeLast]
 - [array-last]

## Contributing

> SEE: [contributing.md](contributing.md)

## Licenses

[![GitHub license](https://img.shields.io/github/license/wilmoore/take-last.js.svg)](https://github.com/wilmoore/take-last.js/blob/master/license)

[array-head]: https://www.npmjs.com/package/array-head
[array-last]: https://www.npmjs.com/package/array-last
[_.takeRight]: https://lodash.com/docs#takeRight
[R.takeLast]: http://ramdajs.com/0.19.0/docs/#takeLast
