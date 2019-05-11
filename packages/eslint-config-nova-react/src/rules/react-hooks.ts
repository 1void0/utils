/* eslint-env commonjs */

/* eslint-disable import/unambiguous */
/* eslint-disable import/no-commonjs */
/* eslint-disable import/no-unused-modules */

module.exports = {
  plugins: ['react-hooks'],
  rules: {
    // Checks rules of Hooks
    'react-hooks/rules-of-hooks': 'error',

    // Checks effect dependencies
    'react-hooks/exhaustive-deps': 'error'
  }
}
