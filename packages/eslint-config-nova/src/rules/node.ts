/* eslint-env commonjs */

/* eslint-disable import/unambiguous */
/* eslint-disable import/no-commonjs */
/* eslint-disable import/no-unused-modules */
/* eslint-disable sort-keys */

module.exports = {
  rules: {
    // Require return statements after callbacks
    'callback-return': 'off',

    // Require require() calls to be placed at top-level module scope
    'global-require': 'error',

    // Require error handling in callbacks
    'handle-callback-err': 'error',

    // Disallow use of the Buffer() constructor
    'no-buffer-constructor': 'error',

    // Disallow require calls to be mixed with regular variable declarations
    'no-mixed-requires': 'error',

    // Disallow new operators with calls to require
    'no-new-require': 'error',

    // Disallow string concatenation with __dirname and __filename
    'no-path-concat': 'error',

    // Disallow the use of process.env
    'no-process-env': 'off',

    // Disallow the use of process.exit()
    'no-process-exit': 'error',

    // Disallow specified modules when loaded by require
    'no-restricted-modules': 'error',

    // Disallow synchronous methods
    'no-sync': 'error'
  }
}
