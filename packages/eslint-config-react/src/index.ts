/* eslint-env commonjs */

/* eslint-disable import/unambiguous */
/* eslint-disable import/no-commonjs */

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    '@void0/eslint-config',
    require.resolve('./rules/react'),
    require.resolve('./rules/react-hooks'),
    require.resolve('./rules/a11y'),
  ],
  parserOptions: {
    ecmaVersion: 2019, // Allows for the parsing of modern ECMAScript features
  },
}
