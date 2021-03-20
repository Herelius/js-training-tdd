'use strict';

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

// Your code:
function jadenCase(str) {
    let output = [];
    output[0] = str[0].toUpperCase();
    for (let i = 1; i < str.length; i++) {
        if (output[i-1] === ' ') {
            output[i] = str[i].toUpperCase();
        } else {
            output[i] = str[i].toLowerCase();
        }
    };
    return output.join("");
};

//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof jadenCase, 'function');
assert.strictEqual(jadenCase.length, 1);
assert.strictEqual(jadenCase('How are you ?'), 'How Are You ?')
//assert.fail('You must write your own tests');
// End of tests */
