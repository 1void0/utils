/* eslint-env jest */

import { isClient, isServer } from '../client'

describe('@void0/platform: client.ts', (): void => {
  test('isClient is true', (): void => {
    expect.assertions(1)
    expect(isClient).toBe(true)
  })

  test('isServer is false', (): void => {
    expect.assertions(1)
    expect(isServer).toBe(false)
  })
})
