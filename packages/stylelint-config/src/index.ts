/* eslint-env commonjs */

/* eslint-disable import/unambiguous */
/* eslint-disable import/no-commonjs */

module.exports = {
  extends: [
    './rules/errors',
    './rules/limit-language',
    './rules/style',
    './rules/order',
    './rules/a11y',
    './rules/prettier',
  ].map((file: string): string => require.resolve(file)),
}
