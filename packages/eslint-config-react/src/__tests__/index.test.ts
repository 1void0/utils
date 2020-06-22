/* eslint-env jest */

/* eslint-disable import/unambiguous */

// eslint-disable-next-line import/no-commonjs, @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports, @typescript-eslint/no-unsafe-assignment
const eslintReactConfig = require('../')

describe('@void0/eslint-config-react', (): void => {
  test('has the correct environment', (): void => {
    expect.assertions(1)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    expect(eslintReactConfig.env).toStrictEqual({
      browser: true,
      es6: true,
      node: true,
    })
  })

  test('extends expected rules', (): void => {
    expect.hasAssertions()

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    eslintReactConfig.extends.forEach((name: string): void => {
      expect(
        name === '@void0/eslint-config' ||
          name.includes('a11y') ||
          name.includes('react') ||
          name.includes('react-hooks')
      ).toBe(true)
    })
  })
})
