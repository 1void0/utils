/* eslint-env commonjs */

/* eslint-disable import/unambiguous */
/* eslint-disable import/no-commonjs */

module.exports = {
  plugins: ['react-hooks'],
  rules: {
    // Checks effect dependencies
    'react-hooks/exhaustive-deps': 'error',

    // Checks rules of Hooks
    'react-hooks/rules-of-hooks': 'error',
  },
}
