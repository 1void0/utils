/* eslint-env commonjs */

/* eslint-disable import/unambiguous */
/* eslint-disable import/no-commonjs */

module.exports = {
  plugins: ['jsdoc'],
  rules: {
    // Reports invalid alignment of JSDoc block asterisks
    'jsdoc/check-alignment': 'error',

    // Ensures that (JavaScript) examples within JSDoc adhere to ESLint rules
    'jsdoc/check-examples': 'error',

    // Reports invalid padding inside JSDoc block
    'jsdoc/check-indentation': 'error',

    // Reports invalid padding inside JSDoc block
    'jsdoc/check-param-names': 'error',

    // Reports against Google Closure Compiler syntax
    'jsdoc/check-syntax': 'error',

    // Reports invalid block tag names
    'jsdoc/check-tag-names': 'error',

    // Reports invalid types
    'jsdoc/check-types': 'error',

    // Reports an issue with any non-constructor function using @implements
    'jsdoc/implements-on-classes': 'error',

    // Enforces a regular expression pattern on descriptions
    'jsdoc/match-description': [
      'error',
      {
        tags: {
          arg: true,
          argument: true,
          param: true,
          return: true,
          returns: true
        }
      }
    ],

    // Enforces a consistent padding of the block description
    'jsdoc/newline-after-description': 'error',

    // This rule reports types being used on @param or @returns
    'jsdoc/no-types': 'error',

    // Checks that types in jsdoc comments are defined. This can be used to check unimported types.
    'jsdoc/no-undefined-types': 'error',

    // Requires that all functions have a description
    'jsdoc/require-description': 'error',

    // Requires that block description and tag description are written in complete sentences
    'jsdoc/require-description-complete-sentence': 'error',

    // Requires that all functions have examples
    'jsdoc/require-example': 'off',

    // Requires a hyphen before the @param description
    'jsdoc/require-hyphen-before-param-description': 'error',

    // Checks for presence of jsdoc comments, on class declarations as well as functions
    'jsdoc/require-jsdoc': 'error',

    // Requires that all function parameters are documented
    'jsdoc/require-param': 'error',

    // Requires that @param tag has description value
    'jsdoc/require-param-description': 'error',

    // Requires that all function parameters have name
    'jsdoc/require-param-name': 'error',

    // Requires that @param tag has type value
    'jsdoc/require-param-type': 'off',

    // Requires returns are documented
    'jsdoc/require-returns': 'error',

    // Checks if the return expression exists in function body and in the comment
    'jsdoc/require-returns-check': 'error',

    // Requires that @returns tag has description value
    'jsdoc/require-returns-description': 'error',

    // Requires that @returns tag has type value
    'jsdoc/require-returns-type': 'off',

    // Requires all types to be valid JSDoc or Closure compiler types without syntax errors
    'jsdoc/valid-types': 'error'
  }
}
