/* eslint-env jest */

/* eslint-disable import/unambiguous */
/* eslint-disable import/no-commonjs */

/* eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports */
const config = require('./')

describe('commitlint-config-nova', (): void => {
  test('extends @commitlint/config-conventional', (): void => {
    expect.assertions(1)
    expect(config.extends).toContain('@commitlint/config-conventional')
  })

  test('rules', (): void => {
    expect.assertions(1)
    expect(config.rules['type-enum'][2]).toStrictEqual([
      'build',
      'chore',
      'ci',
      'content',
      'design',
      'docs',
      'feat',
      'fix',
      'perf',
      'refactor',
      'revert',
      'style',
      'test'
    ])
  })
})
