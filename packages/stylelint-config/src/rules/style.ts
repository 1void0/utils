/* eslint-env commonjs */

/* eslint-disable import/unambiguous */
/* eslint-disable import/no-commonjs */
/* eslint-disable sort-keys */

module.exports = {
  rules: {
    // -- Color

    // Specify lowercase or uppercase for hex colors (Autofixable).
    'color-hex-case': 'lower',

    // Specify short or long notation for hex colors (Autofixable).
    'color-hex-length': 'short',

    // -- Font family

    // Specify whether or not quotation marks should be used around font family names.
    'font-family-name-quotes': 'always-where-recommended',

    // -- Font weight

    // Require numeric or named (where possible) font-weight values. Also, when named values are expected, require only valid names.
    'font-weight-notation': 'named-where-possible',

    // -- Function

    /*
     * Require a newline or disallow whitespace after the commas of functions (Autofixable).
     * 'function-comma-newline-after': 'always-multi-line',
     */

    /*
     * Require a newline or disallow whitespace before the commas of functions (Autofixable).
     * 'function-comma-newline-before': 'always-multi-line',
     */

    /*
     * Require a single space or disallow whitespace after the commas of functions (Autofixable).
     * 'function-comma-space-after': 'always',
     */

    /*
     * Require a single space or disallow whitespace before the commas of functions (Autofixable).
     * 'function-comma-space-before': 'never',
     */

    /*
     * Limit the number of adjacent empty lines within functions (Autofixable).
     * 'function-max-empty-lines': 1,
     */

    // Specify lowercase or uppercase for function names (Autofixable).
    'function-name-case': 'lower',

    /*
     * Require a newline or disallow whitespace on the inside of the parentheses of functions (Autofixable).
     * 'function-parentheses-newline-inside': 'always-multi-line',
     */

    /*
     * Require a single space or disallow whitespace on the inside of the parentheses of functions (Autofixable).
     * 'function-parentheses-space-inside': 'never',
     */

    // Require or disallow quotes for urls.
    'function-url-quotes': 'always',

    /*
     * Require or disallow whitespace after functions (Autofixable).
     * 'function-whitespace-after': 'always',
     */

    // -- Number

    // Require or disallow a leading zero for fractional numbers less than 1 (Autofixable).
    'number-leading-zero': 'always',

    // Disallow trailing zeros in numbers (Autofixable).
    'number-no-trailing-zeros': true,

    // -- String

    // Specify single or double quotes around strings (Autofixable).
    'string-quotes': 'double',

    // -- Length

    // Disallow units for zero lengths (Autofixable).
    'length-zero-no-unit': true,

    // -- Unit

    // Specify lowercase or uppercase for units (Autofixable).
    'unit-case': 'lower',

    // -- Value

    // Specify lowercase or uppercase for keywords values (Autofixable).
    'value-keyword-case': 'lower',

    // -- Value list

    /*
     * Require a newline or disallow whitespace after the commas of value lists (Autofixable).
     * 'value-list-comma-newline-after': 'always-multi-line',
     */

    /*
     * Require a newline or disallow whitespace before the commas of value lists.
     * 'value-list-comma-newline-before': 'always-multi-line',
     */

    /*
     * Require a single space or disallow whitespace after the commas of value lists (Autofixable).
     * 'value-list-comma-space-after': 'always',
     */

    /*
     * Require a single space or disallow whitespace before the commas of value lists (Autofixable).
     * 'value-list-comma-space-before': 'never',
     */

    /*
     * Limit the number of adjacent empty lines within value lists (Autofixable).
     * 'value-list-max-empty-lines': 1,
     */

    // -- Custom property

    // Require or disallow an empty line before custom properties (Autofixable).
    'custom-property-empty-line-before': 'never',

    // -- Property

    // Specify lowercase or uppercase for properties (Autofixable).
    'property-case': 'lower',

    // -- Declaration

    /*
     * Require a single space or disallow whitespace after the bang of declarations (Autofixable).
     * 'declaration-bang-space-after': 'never',
     */

    /*
     * Require a single space or disallow whitespace before the bang of declarations (Autofixable).
     * 'declaration-bang-space-before': 'always',
     */

    /*
     * Require a newline or disallow whitespace after the colon of declarations (Autofixable).
     * 'declaration-colon-newline-after': 'always-multi-line',
     */

    /*
     * Require a single space or disallow whitespace after the colon of declarations (Autofixable).
     * 'declaration-colon-space-after': 'always',
     */

    /*
     * Require a single space or disallow whitespace before the colon of declarations (Autofixable).
     * 'declaration-colon-space-before': 'never',
     */

    /*
     * Require or disallow an empty line before declarations (Autofixable).
     * 'declaration-empty-line-before': 'never',
     */

    // -- Declaration block

    /*
     * Require a newline or disallow whitespace after the semicolons of declaration blocks (Autofixable).
     * 'declaration-block-semicolon-newline-after': 'always',
     */

    /*
     * Require a newline or disallow whitespace before the semicolons of declaration blocks.
     * 'declaration-block-semicolon-newline-before': 'never-multi-line',
     */

    /*
     * Require a single space or disallow whitespace after the semicolons of declaration blocks (Autofixable).
     * 'declaration-block-semicolon-space-after': 'always-single-line',
     */

    /*
     * Require a single space or disallow whitespace before the semicolons of declaration blocks (Autofixable).
     * 'declaration-block-semicolon-space-before': 'never',
     */

    /*
     * Require or disallow a trailing semicolon within declaration blocks (Autofixable).
     * 'declaration-block-trailing-semicolon': 'always',
     */

    // -- Block

    /*
     * Require or disallow an empty line before the closing brace of blocks (Autofixable).
     * 'block-closing-brace-empty-line-before': 'never',
     */

    /*
     * Require a newline or disallow whitespace after the closing brace of blocks (Autofixable).
     * 'block-closing-brace-newline-after': 'always',
     */

    /*
     * Require a newline or disallow whitespace before the closing brace of blocks (Autofixable).
     * 'block-closing-brace-newline-before': 'always-multi-line',
     */

    /*
     * Require a single space or disallow whitespace after the closing brace of blocks.
     * 'block-closing-brace-space-after': 'always-single-line',
     */

    /*
     * Require a single space or disallow whitespace before the closing brace of blocks (Autofixable).
     * 'block-closing-brace-space-before': 'always-single-line',
     */

    /*
     * Require a newline after the opening brace of blocks (Autofixable).
     * 'block-opening-brace-newline-after': 'always-multi-line',
     */

    /*
     * Require a newline or disallow whitespace before the opening brace of blocks (Autofixable).
     * 'block-opening-brace-newline-before': 'never',
     */

    /*
     * Require a single space or disallow whitespace after the opening brace of blocks (Autofixable).
     * 'block-opening-brace-space-after': 'always-multi-line',
     */

    /*
     * Require a single space or disallow whitespace before the opening brace of blocks (Autofixable).
     * 'block-opening-brace-space-before': 'always',
     */

    // -- Selector

    /*
     * Require a single space or disallow whitespace on the inside of the brackets within attribute selectors (Autofixable).
     * 'selector-attribute-brackets-space-inside': 'never',
     */

    /*
     * Require a single space or disallow whitespace after operators within attribute selectors (Autofixable).
     * 'selector-attribute-operator-space-after': 'never',
     */

    /*
     * Require a single space or disallow whitespace before operators within attribute selectors (Autofixable).
     * 'selector-attribute-operator-space-before': 'never',
     */

    /*
     * Require or disallow quotes for attribute values.
     * 'selector-attribute-quotes': 'always',
     */

    /*
     * Require a single space or disallow whitespace after the combinators of selectors (Autofixable).
     * 'selector-combinator-space-after': 'always',
     */

    /*
     * Require a single space or disallow whitespace before the combinators of selectors (Autofixable).
     * 'selector-combinator-space-before': 'always',
     */

    /*
     * Disallow non-space characters for descendant combinators of selectors (Autofixable).
     * 'selector-descendant-combinator-no-non-space': true,
     */

    // Specify lowercase or uppercase for pseudo-class selectors (Autofixable).
    'selector-pseudo-class-case': 'lower',

    /*
     * Require a single space or disallow whitespace on the inside of the parentheses within pseudo-class selectors (Autofixable).
     * 'selector-pseudo-class-parentheses-space-inside': 'never',
     */

    // Specify lowercase or uppercase for pseudo-element selectors.
    'selector-pseudo-element-case': 'lower',

    // Specify single or double colon notation for applicable pseudo-elements (Autofixable).
    'selector-pseudo-element-colon-notation': 'double',

    // Specify lowercase or uppercase for type selectors (Autofixable).
    'selector-type-case': 'lower',

    // -- Selector list

    /*
     * Require a newline or disallow whitespace after the commas of selector lists (Autofixable).
     * 'selector-list-comma-newline-after': 'always-multi-line',
     */

    /*
     * Require a newline or disallow whitespace before the commas of selector lists (Autofixable).
     * 'selector-list-comma-newline-before': 'never-multi-line',
     */

    /*
     * Require a single space or disallow whitespace after the commas of selector lists (Autofixable).
     * 'selector-list-comma-space-after': 'always',
     */

    /*
     * Require a single space or disallow whitespace before the commas of selector lists (Autofixable).
     * 'selector-list-comma-space-before': 'never',
     */

    // -- Rule

    // Require or disallow an empty line before rules (Autofixable).
    'rule-empty-line-before': 'always-multi-line',

    // -- Media feature

    /*
     * Require a single space or disallow whitespace after the colon in media features (Autofixable).
     * 'media-feature-colon-space-after': 'always',
     */

    /*
     * Require a single space or disallow whitespace before the colon in media features (Autofixable).
     * 'media-feature-colon-space-before': 'never',
     */

    // Specify lowercase or uppercase for media feature names (Autofixable).
    'media-feature-name-case': 'lower',

    /*
     * Require a single space or disallow whitespace on the inside of the parentheses within media features (Autofixable).
     * 'media-feature-parentheses-space-inside': 'never',
     */

    // Require a single space or disallow whitespace after the range operator in media features (Autofixable).
    'media-feature-range-operator-space-after': 'always',

    // Require a single space or disallow whitespace before the range operator in media features (Autofixable).
    'media-feature-range-operator-space-before': 'always',

    // -- Media query list

    /*
     * Require a newline or disallow whitespace after the commas of media query lists (Autofixable).
     * 'media-query-list-comma-newline-after': 'always-multi-line',
     */

    /*
     * Require a newline or disallow whitespace before the commas of media query lists.
     * 'media-query-list-comma-newline-before': 'never-multi-line',
     */

    /*
     * Require a single space or disallow whitespace after the commas of media query lists (Autofixable).
     * 'media-query-list-comma-space-after': 'always',
     */

    /*
     * Require a single space or disallow whitespace before the commas of media query lists (Autofixable).
     * 'media-query-list-comma-space-before': 'never',
     */

    // -- At-rule

    // Require or disallow an empty line before at-rules (Autofixable).
    'at-rule-empty-line-before': 'always',

    // Specify lowercase or uppercase for at-rules names (Autofixable).
    'at-rule-name-case': 'lower',

    /*
     * Require a newline after at-rule names.
     * 'at-rule-name-newline-after': 'always-multi-line',
     */

    /*
     * Require a single space after at-rule names (Autofixable).
     * 'at-rule-name-space-after': 'always',
     */

    /*
     * Require a newline after the semicolon of at-rules (Autofixable).
     * 'at-rule-semicolon-newline-after': 'always',
     */

    /*
     * Require a single space or disallow whitespace before the semicolons of at-rules.
     * 'at-rule-semicolon-space-before': 'never',
     */

    // -- Comment

    /*
     * Require or disallow an empty line before comments (Autofixable).
     * 'comment-empty-line-before': 'never',
     */

    // Require or disallow whitespace on the inside of comment markers (Autofixable).
    'comment-whitespace-inside': 'always',

    // -- General / Sheet

    /*
     * Specify indentation (Autofixable).
     * indentation: 2,
     */

    // Specify unix or windows linebreaks (Autofixable).
    linebreaks: 'unix',

    /*
     * Limit the number of adjacent empty lines.
     * 'max-empty-lines': 1,
     */

    // Limit the length of a line.
    'max-line-length': true

    /*
     * Disallow end-of-line whitespace (Autofixable).
     * 'no-eol-whitespace': true,
     */

    /*
     * Disallow missing end-of-source newlines (Autofixable).
     * 'no-missing-end-of-source-newline': true,
     */

    /*
     * Disallow empty first lines (Autofixable).
     * 'no-empty-first-line': true
     */
  }
}
