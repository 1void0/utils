/* eslint-env commonjs */

/* eslint-disable import/unambiguous */
/* eslint-disable import/no-commonjs */
/* eslint-disable import/no-unused-modules */
/* eslint-disable sort-keys */

module.exports = {
  parserOptions: {
    sourceType: 'module' // Allows for the use of imports
  },
  plugins: ['import'],
  rules: {
    // -- Static analysis:

    // Reports modules without any exports and individual exports not being statically imported or requireed from other modules in the same project
    'import/no-unused-modules': 'off',
    /*
     * 'import/no-unused-modules': [
     *   'error',
     *   { missingExports: true, unusedExports: true }
     * ],
     */

    // Ensure imports point to a file/module that can be resolved
    'import/no-unresolved': 'error',

    // Ensure named imports correspond to a named export in the remote file
    'import/named': 'error',

    // Ensure a default export is present, given a default import
    'import/default': 'error',

    // Ensure imported namespaces contain dereferenced properties as they are dereferenced
    'import/namespace': 'error',

    // Restrict which files can be imported in a given folder
    'import/no-restricted-paths': 'error',

    // Forbid import of modules using absolute paths
    'import/no-absolute-path': 'error',

    // Forbid require() calls with expressions
    'import/no-dynamic-require': 'error',

    // Prevent importing the submodules of other modules
    'import/no-internal-modules': 'off',

    // Forbid Webpack loader syntax in imports
    'import/no-webpack-loader-syntax': 'error',

    // Forbid a module from importing itself
    'import/no-self-import': 'error',

    // Forbid a module from importing a module with a dependency path back to itself
    'import/no-cycle': 'error',

    // Prevent unnecessary path segments in import and require statements
    'import/no-useless-path-segments': 'error',

    // Forbid importing modules from parent directories
    'import/no-relative-parent-imports': 'off',

    // -- Helpful warnings:

    // Report any invalid exports, i.e. re-export of the same name
    'import/export': 'error',

    // Report use of exported name as identifier of default export
    'import/no-named-as-default': 'error',

    // Report use of exported name as property of default export
    'import/no-named-as-default-member': 'error',

    // Report imported names marked with @deprecated documentation tag
    'import/no-deprecated': 'error',

    // Forbid the use of extraneous packages
    'import/no-extraneous-dependencies': 'error',

    // Forbid the use of mutable exports with var or let
    'import/no-mutable-exports': 'error',

    // -- Module systems:

    // Report potentially ambiguous parse goal (script vs. module)
    'import/unambiguous': 'error',

    // Report CommonJS require calls and module.exports or exports.*
    'import/no-commonjs': 'error',

    // Report AMD require and define calls.
    'import/no-amd': 'error',

    // No Node.js builtin modules.
    'import/no-nodejs-modules': 'off',

    // -- Style guide:

    // Ensure all imports appear before other statements
    'import/first': 'error',

    // Ensure all exports appear after other statements
    'import/exports-last': 'error',

    // Report repeated import of the same module in multiple places
    'import/no-duplicates': 'error',

    // Report namespace imports
    'import/no-namespace': 'error',

    // Ensure consistent use of file extension within the import path
    'import/extensions': [
      'error',
      'always',
      { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' }
    ],

    // Enforce a convention in module import order
    'import/order': ['error', { 'newlines-between': 'always' }],

    // Enforce a newline after import statements
    'import/newline-after-import': 'error',

    // Prefer a default export if module exports a single name
    'import/prefer-default-export': 'off',

    // Limit the maximum number of dependencies a module can have
    'import/max-dependencies': 'off',

    // Forbid unassigned imports
    'import/no-unassigned-import': 'error',

    // Forbid named default exports
    'import/no-named-default': 'error',

    // Forbid default exports
    'import/no-default-export': 'error',

    // Forbid named exports
    'import/no-named-export': 'off',

    // Forbid anonymous values as default exports
    'import/no-anonymous-default-export': 'error',

    // Prefer named exports to be grouped together in a single export declaration
    'import/group-exports': 'error',

    // Enforce a leading comment with the webpackChunkName for dynamic imports
    'import/dynamic-import-chunkname': 'error'
  },
  settings: {
    'import/resolver': {
      typescript: {}
    }
  }
}
