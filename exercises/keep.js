'use strict';

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

// Your code:
function keepFirst(str) {
    return str.substring(0, 2);
};
function keepLast(str) {
    return str.substring(str.length - 2, str.length);
};
function keepFirstLast(str) {
    return str.substring(3, 5);
};

//* Begin of tests
const assert = require('assert');
assert.strictEqual(typeof keepFirst, 'function');
assert.strictEqual(keepFirst.length, 1);
assert.strictEqual(keepFirst('Hello world'), 'He');

assert.strictEqual(typeof keepLast, 'function');
assert.strictEqual(keepLast.length, 1);
assert.strictEqual(keepLast('Hello world'), 'ld');

assert.strictEqual(typeof keepFirstLast, 'function');
assert.strictEqual(keepFirstLast.length, 1);
assert.strictEqual(keepFirstLast('Hello world'), 'lo');

//assert.fail('You must write your own tests');
// End of tests */
