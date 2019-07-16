/* eslint-env commonjs */

/* eslint-disable import/unambiguous */
/* eslint-disable import/no-commonjs */
/* eslint-disable sort-keys */

module.exports = {
  rules: {
    // -- Color

    // Require (where possible) or disallow named colors.
    'color-named': 'never',

    // Disallow hex colors.
    'color-no-hex': false,

    // -- Function

    // Specify a blacklist of disallowed functions.
    'function-blacklist': [],

    // Disallow scheme-relative urls.
    'function-url-no-scheme-relative': true,

    // Specify a blacklist of disallowed URL schemes.
    'function-url-scheme-blacklist': [],

    // Specify a whitelist of allowed URL schemes.
    'function-url-scheme-whitelist': [],

    // Specify a whitelist of allowed functions.
    'function-whitelist': [],

    // -- Keyframes

    /*
     * Specify a pattern for keyframe names.
     * 'keyframes-name-pattern': '',
     */

    // -- Number

    // Limit the number of decimal places allowed in numbers.
    'number-max-precision': 5,

    // -- Time

    // Specify the minimum number of milliseconds for time values.
    'time-min-milliseconds': 40,

    // -- Unit

    // Specify a blacklist of disallowed units.
    'unit-blacklist': [],

    // Specify a whitelist of allowed units.
    'unit-whitelist': [],

    // -- Shorthand property

    // Disallow redundant values in shorthand properties (Autofixable).
    'shorthand-property-no-redundant-values': true,

    // -- Value

    // Disallow vendor prefixes for values.
    'value-no-vendor-prefix': true,

    // -- Custom property

    /*
     * Specify a pattern for custom properties.
     * 'custom-property-pattern': true,
     */

    // -- Property

    // Specify a blacklist of disallowed properties.
    'property-blacklist': [],

    // Disallow vendor prefixes for properties.
    'property-no-vendor-prefix': true,

    // Specify a whitelist of allowed properties.
    'property-whitelist': [],

    // -- Declaration

    // Disallow longhand properties that can be combined into one shorthand property.
    'declaration-block-no-redundant-longhand-properties': true,

    // Disallow !important within declarations.
    'declaration-no-important': true,

    // Specify a blacklist of disallowed property and unit pairs within declarations.
    'declaration-property-unit-blacklist': {},

    // Specify a whitelist of allowed property and unit pairs within declarations.
    'declaration-property-unit-whitelist': {},

    // Specify a blacklist of disallowed property and value pairs within declarations.
    'declaration-property-value-blacklist': {},

    // Specify a whitelist of allowed property and value pairs within declarations.
    'declaration-property-value-whitelist': {},

    // -- Declaration block

    // Limit the number of declarations within a single-line declaration block.
    'declaration-block-single-line-max-declarations': 1,

    // -- Selector

    // Specify a blacklist of disallowed attribute operators.
    'selector-attribute-operator-blacklist': [],

    // Specify a whitelist of allowed attribute operators.
    'selector-attribute-operator-whitelist': [],

    /*
     * Specify a pattern for class selectors.
     * 'selector-class-pattern': '',
     */

    // Specify a blacklist of disallowed combinators.
    'selector-combinator-blacklist': [],

    // Specify a whitelist of allowed combinators.
    'selector-combinator-whitelist': [],

    /*
     * Specify a pattern for ID selectors.
     * 'selector-id-pattern': '',
     */

    /*
     * Limit the number of attribute selectors in a selector.
     * 'selector-max-attribute': 5,
     */

    /*
     * Limit the number of classes in a selector.
     * 'selector-max-class': 7,
     */

    /*
     * Limit the number of combinators in a selector.
     * 'selector-max-combinators': 5,
     */

    /*
     * Limit the number of compound selectors in a selector.
     * 'selector-max-compound-selectors': 7,
     */

    /*
     * Limit the number of adjacent empty lines within selectors (Autofixable).
     * 'selector-max-empty-lines': 0,
     */

    /*
     * Limit the number of ID selectors in a selector.
     * 'selector-max-id': 5,
     */

    /*
     * Limit the number of pseudo-classes in a selector.
     * 'selector-max-pseudo-class': 3,
     */

    /*
     * Limit the specificity of selectors.
     * 'selector-max-specificity': 8,
     */

    /*
     * Limit the number of type in a selector.
     * 'selector-max-type': 10,
     */

    /*
     * Limit the number of universal selectors in a selector.
     * 'selector-max-universal': 3,
     */

    /*
     * Specify a pattern for the selectors of rules nested within rules.
     * 'selector-nested-pattern': '',
     */

    // Disallow qualifying a selector by type.
    'selector-no-qualifying-type': false,

    // Disallow vendor prefixes for selectors.
    'selector-no-vendor-prefix': true,

    // Specify a blacklist of disallowed pseudo-class selectors.
    'selector-pseudo-class-blacklist': [],

    // Specify a whitelist of allowed pseudo-class selectors.
    'selector-pseudo-class-whitelist': [],

    // Specify a blacklist of disallowed pseudo-element selectors.
    'selector-pseudo-element-blacklist': [],

    // Specify a whitelist of allowed pseudo-element selectors.
    'selector-pseudo-element-whitelist': [],

    // -- Media feature

    // Specify a blacklist of disallowed media feature names.
    'media-feature-name-blacklist': true,

    // Disallow vendor prefixes for media feature names.
    'media-feature-name-no-vendor-prefix': true,

    // Specify a whitelist of allowed media feature name and value pairs.
    'media-feature-name-value-whitelist': true,

    // Specify a whitelist of allowed media feature names.
    'media-feature-name-whitelist': true,

    // -- Custom media

    // Specify a pattern for custom media query names.
    'custom-media-pattern': true,

    // -- At-rule

    // Specify a blacklist of disallowed at-rules.
    'at-rule-blacklist': [],

    // Disallow vendor prefixes for at-rules.
    'at-rule-no-vendor-prefix': true,

    // Specify a requirelist of properties for an at-rule.
    'at-rule-property-requirelist': {},

    // Specify a whitelist of allowed at-rules.
    'at-rule-whitelist': [],

    // -- Comment

    // Specify a blacklist of disallowed words within comments.
    'comment-word-blacklist': [],

    // -- General / Sheet

    /*
     * Limit the depth of nesting.
     * 'max-nesting-depth': 10,
     */

    // Disallow unknown animations.
    'no-unknown-animations': true
  }
}
