# @void0/eslint-config-react

This package provides a strict ESlint config TypeScript and React projects using Prettier, JS modules and concerned about accessibility.

It has several peer dependencies needed for each kind of rules it contains:

- @typescript-eslint/eslint-plugin
- @typescript-eslint/parser
- eslint
- eslint-config-prettier
- eslint-import-resolver-typescript
- eslint-plugin-import
- eslint-plugin-jest
- eslint-plugin-prettier
- typescript
- eslint-plugin-jsx-a11y
- eslint-plugin-react
- eslint-plugin-react-hooks

## Usage

1. Install the correct versions of each package, which are listed by the command:

```sh
npm info "@void0/eslint-config-react@latest" peerDependencies
```

If using **npm 5+**, use this shortcut

```sh
npx install-peerdeps --dev @void0/eslint-config-react
```

If using **yarn**, you can also use the shortcut described above if you have npm 5+ installed on your machine, as the command will detect that you are using yarn and will act accordingly.
Otherwise, run `npm info "eslint-config-airbnb-base@latest" peerDependencies` to list the peer dependencies and versions, then run `yarn add --dev <dependency>@<version>` for each listed peer dependency.

2. Add `"extends": "@void0/eslint-config-react"` to your .eslintrc.

## Ignored Rules

Most of the rules are activated and will trigger errors. Here is a list of all the rules that are **ignored** in this config:

**TBD**
