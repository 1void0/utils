/* eslint-env jest */

import { isClient, isServer } from '../server'

describe('@void0/platform: server.ts', (): void => {
  test('isClient is true', (): void => {
    expect.assertions(1)
    expect(isClient).toBe(false)
  })

  test('isServer is false', (): void => {
    expect.assertions(1)
    expect(isServer).toBe(true)
  })
})
