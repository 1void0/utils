/* eslint-env commonjs */

/* eslint-disable import/unambiguous */
/* eslint-disable import/no-commonjs */
/* eslint-disable sort-keys */

module.exports = {
  extends: ['prettier/@typescript-eslint'],
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    project: './tsconfig.json'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    // Require that member overloads be consecutive (adjacent-overload-signatures from TSLint)
    '@typescript-eslint/adjacent-overload-signatures': 'error',

    // Requires using either T[] or Array<T> for arrays (array-type from TSLint)
    '@typescript-eslint/array-type': 'error',

    // Disallow awaiting a value that is not a Promise (await-promise from TSLint)
    '@typescript-eslint/await-thenable': 'error',

    // Enforces that types will not to be used (ban-types from TSLint)
    '@typescript-eslint/ban-types': 'error',

    // Bans “// @ts-ignore” comments from being used (ban-ts-ignore from TSLint)
    '@typescript-eslint/ban-ts-ignore': 'error',

    // Enforce camelCase naming convention
    '@typescript-eslint/camelcase': 'error',

    // Require PascalCased class and interface names (class-name from TSLint)
    '@typescript-eslint/class-name-casing': 'error',

    // Consistent with type definition either interface or type
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

    // Require explicit return types on functions and class methods
    '@typescript-eslint/explicit-function-return-type': 'error',

    // Require explicit accessibility modifiers on class properties and methods (member-access from TSLint)
    '@typescript-eslint/explicit-member-accessibility': 'error',

    // Enforces naming of generic type variables
    '@typescript-eslint/generic-type-naming': 'error',

    // Enforce consistent indentation (indent from TSLint)
    '@typescript-eslint/indent': 'off',

    // Require that interface names be prefixed with I (interface-name from TSLint)
    '@typescript-eslint/interface-name-prefix': 'error',

    // Require a specific member delimiter style for interfaces and type literals
    '@typescript-eslint/member-delimiter-style': 'off',

    // Enforces naming conventions for class members by visibility
    '@typescript-eslint/member-naming': 'error',

    // Require a consistent member declaration order (member-ordering from TSLint)
    '@typescript-eslint/member-ordering': 'error',

    // Enforces the use of as Type assertions instead of <Type> assertions (no-angle-bracket-type-assertion from TSLint)
    '@typescript-eslint/no-angle-bracket-type-assertion': 'error',

    // Disallow generic Array constructors
    '@typescript-eslint/no-array-constructor': 'error',

    // Disallow Empty Functions
    '@typescript-eslint/no-empty-function': 'error',

    // Disallow the declaration of empty interfaces (no-empty-interface from TSLint)
    '@typescript-eslint/no-empty-interface': 'error',

    // Disallow usage of the any type (no-any from TSLint)
    '@typescript-eslint/no-explicit-any': 'error',

    // Forbids the use of classes as namespaces (no-unnecessary-class from TSLint)
    '@typescript-eslint/no-extraneous-class': 'error',

    // Requires Promise-like values to be handled appropriately
    '@typescript-eslint/no-floating-promises': 'error',

    // Disallow iterating over an array with a for-in loop (no-for-in-array from TSLint)
    '@typescript-eslint/no-for-in-array': 'error',

    // Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean. (no-inferrable-types from TSLint)
    '@typescript-eslint/no-inferrable-types': 'error',

    // Enforce valid definition of new and constructor. (no-misused-new from TSLint)
    '@typescript-eslint/no-misused-new': 'error',

    // Disallow the use of custom TypeScript modules and namespaces (no-namespace from TSLint)
    '@typescript-eslint/no-namespace': 'error',

    // Disallows non-null assertions using the ! postfix operator (no-non-null-assertion from TSLint)
    '@typescript-eslint/no-non-null-assertion': 'error',

    // Forbids an object literal to appear in a type assertion expression (no-object-literal-type-assertion from TSLint)
    '@typescript-eslint/no-object-literal-type-assertion': 'error',

    // Disallow the use of parameter properties in class constructors. (no-parameter-properties from TSLint)
    '@typescript-eslint/no-parameter-properties': 'error',

    // Disallows invocation of require() (no-require-imports from TSLint)
    '@typescript-eslint/no-require-imports': 'error',

    // Disallow aliasing this (no-this-assignment from TSLint)
    '@typescript-eslint/no-this-alias': 'error',

    // Disallow the use of type aliases (interface-over-type-literal from TSLint)
    '@typescript-eslint/no-type-alias': 'error',

    // Warns when a namespace qualifier is unnecessary (no-unnecessary-qualifier from TSLint)
    '@typescript-eslint/no-unnecessary-qualifier': 'error',

    // Warns if a type assertion does not change the type of an expression (no-unnecessary-type-assertion from TSLint)
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',

    // Disallow unused variables (no-unused-variable from TSLint)
    '@typescript-eslint/no-unused-vars': 'error',

    // Disallow the use of variables before they are defined
    '@typescript-eslint/no-use-before-define': 'error',

    // Disallow unnecessary constructors
    '@typescript-eslint/no-useless-constructor': 'error',

    // Disallows the use of require statements except in import statements (no-var-requires from TSLint)
    '@typescript-eslint/no-var-requires': 'error',

    // Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated.
    '@typescript-eslint/prefer-for-of': 'error',

    // Use function types instead of interfaces with call signatures (callable-types from TSLint)
    '@typescript-eslint/prefer-function-type': 'error',

    // Enforce includes method over indexOf method.
    '@typescript-eslint/prefer-includes': 'error',

    // Prefer an interface declaration over a type literal (type T = { ... }) (interface-over-type-literal from TSLint)
    '@typescript-eslint/prefer-interface': 'error',

    // Require the use of the namespace keyword instead of the module keyword to declare custom TypeScript modules. (no-internal-module from TSLint)
    '@typescript-eslint/prefer-namespace-keyword': 'error',

    // Require never-modified private members be marked as readonly
    '@typescript-eslint/prefer-readonly': 'error',

    // Enforce the use of String#startsWith and String#endsWith instead of other equivalent methods of checking substrings
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',

    // Requires any function or method that returns a Promise to be marked async. (promise-function-async from TSLint)
    '@typescript-eslint/promise-function-async': 'error',

    // Enforce giving compare argument to Array#sort
    '@typescript-eslint/require-array-sort-compare': 'error',

    // When adding two variables, operands must both be of type number or of type string. (restrict-plus-operands from TSLint)
    '@typescript-eslint/restrict-plus-operands': 'error',

    // Require or disallow semicolons instead of ASI
    '@typescript-eslint/semi': 'off',

    // Boolean expressions are limited to booleans
    '@typescript-eslint/strict-boolean-expressions': 'error',

    // Sets preference level for triple slash directives versus ES6-style import declarations
    '@typescript-eslint/triple-slash-reference': [
      'error',
      { path: 'never', types: 'never', lib: 'never' }
    ],

    // Require consistent spacing around type annotations (typedef-whitespace from TSLint)
    '@typescript-eslint/type-annotation-spacing': 'error',

    // Enforces unbound methods are called with their expected scope. (no-unbound-method from TSLint)
    '@typescript-eslint/unbound-method': 'error',

    // Warns for any two overloads that could be unified into one. (unified-signatures from TSLint)
    '@typescript-eslint/unified-signatures': 'error'
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    }
  }
}
