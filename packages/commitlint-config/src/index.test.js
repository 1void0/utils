/* eslint-env jest */

/* eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports */
const commitlintConfig = require('.')

describe('@void0/commitlint-config', () => {
  test('extends @commitlint/config-conventional', () => {
    expect.assertions(1)
    expect(commitlintConfig.extends).toContain(
      '@commitlint/config-conventional'
    )
  })

  test('rules', () => {
    expect.assertions(1)
    expect(commitlintConfig.rules['type-enum'][2]).toStrictEqual([
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
      'test',
    ])
  })
})
