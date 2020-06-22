/* eslint-env commonjs */

/* eslint-disable import/unambiguous */
/* eslint-disable import/no-commonjs */

module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    './rules/errors',
    './rules/best-practices',
    './rules/strict',
    './rules/variables',
    './rules/style',
    './rules/es6',
    './rules/typescript',
    './rules/import',
    './rules/jest',
    './rules/jsdoc',
    './rules/prettier',
  ].map((file: string): string => require.resolve(file)),
  parserOptions: {
    ecmaVersion: 2019, // Allows for the parsing of modern ECMAScript features
  },
}
