/* eslint-env commonjs */

/* eslint-disable import/unambiguous */
/* eslint-disable import/no-commonjs */

module.exports = {
  rules: {
    // * We leave most stylistic issues to prettier

    // Enforce camelcase naming convention
    camelcase: 'error',

    // Enforce or disallow capitalization of the first letter of a comment
    'capitalized-comments': 'off',

    // Enforce consistent naming when capturing the current execution context
    'consistent-this': ['error', 'that'],

    // Require function names to match the name of the variable or property to which they are assigned
    'func-name-matching': 'error',

    // Require or disallow named function expressions
    'func-names': ['error', 'as-needed'],

    // Enforce the consistent use of either function declarations or expressions
    'func-style': ['error', 'expression'],

    // Disallow specified identifiers
    'id-blacklist': 'off',

    // Enforce minimum and maximum identifier lengths
    'id-length': 'off',

    // Require identifiers to match a specified regular expression
    'id-match': 'off',

    // Enforce position of line comments
    'line-comment-position': 'off',

    // Require or disallow an empty line between class members
    'lines-between-class-members': 'error',

    // Enforce a maximum depth that blocks can be nested
    'max-depth': 'off',

    // Enforce a maximum number of lines per file
    'max-lines': 'off',

    // Enforce a maximum number of line of code in a function
    'max-lines-per-function': 'off',

    // Enforce a maximum depth that callbacks can be nested
    'max-nested-callbacks': 'off',

    // Enforce a maximum number of parameters in function definitions
    'max-params': 'off',

    // Enforce a maximum number of statements allowed in function blocks
    'max-statements': 'off',

    // Enforce a maximum number of statements allowed per line
    'max-statements-per-line': 'off',

    // Enforce a particular style for multiline comments
    'multiline-comment-style': 'error',

    // Require constructor names to begin with a capital letter
    'new-cap': 'error',

    // Disallow Array constructors
    'no-array-constructor': 'error',

    // Disallow bitwise operators
    'no-bitwise': 'error',

    // Disallow continue statements
    'no-continue': 'error',

    // Disallow inline comments after code
    'no-inline-comments': 'off',

    // Disallow if statements as the only statement in else blocks
    'no-lonely-if': 'error',

    // Disallow mixed binary operators
    'no-mixed-operators': 'error',

    // Disallow use of chained assignment expressions
    'no-multi-assign': 'error',

    // Disallow multiple empty lines
    'no-multiple-empty-lines': 'error',

    // Disallow negated conditions
    'no-negated-condition': 'error',

    // Disallow nested ternary expressions
    'no-nested-ternary': 'error',

    // Disallow Object constructors
    'no-new-object': 'error',

    // Disallow the unary operators ++ and --
    'no-plusplus': 'error',

    // Disallow specified syntax
    'no-restricted-syntax': 'off',

    // Disallow ternary operators
    'no-ternary': 'off',

    // Disallow dangling underscores in identifiers
    'no-underscore-dangle': 'error',

    // Disallow ternary operators when simpler alternatives exist
    'no-unneeded-ternary': 'error',

    // Enforce variables to be declared either together or separately in functions
    'one-var': ['error', 'never'],

    // Require or disallow assignment operator shorthand where possible
    'operator-assignment': 'error',

    // Require or disallow padding lines between statements
    'padding-line-between-statements': 'off',

    // Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead
    'prefer-object-spread': 'error',

    // Require object keys to be sorted
    'sort-keys': ['error', 'asc', { caseSensitive: true, natural: true }],

    // Require variables within the same declaration block to be sorted
    'sort-vars': 'error',

    // Enforce consistent spacing after the // or /* in a comment
    'spaced-comment': 'error'
  }
}
