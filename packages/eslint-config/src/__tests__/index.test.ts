/* eslint-env jest */

import fs from 'fs'
import path from 'path'

// eslint-disable-next-line import/no-commonjs, @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports, @typescript-eslint/no-unsafe-assignment
const eslintConfig = require('../')

type Files = Record<string, Record<string, unknown>>

/**
 * Get the files containing the rules.
 *
 * @returns Promise resolving with the files.
 */
async function getFiles(): Promise<Files> {
  return new Promise(
    (
      resolve: (value?: Files | PromiseLike<Files>) => void,
      reject: (reason?: Error) => void
    ): void => {
      fs.readdir(
        path.join(__dirname, '../rules'),
        (error: Error | null, directoryFiles: readonly string[]): void => {
          if (error !== null) {
            reject(error)
          }

          const files: Files = {}

          directoryFiles.map(
            async (name: string): Promise<void> => {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              files[name] = await import(
                /* webpackChunkName: "rule" */ `../rules/${name}`
              )
            }
          )

          resolve(files)
        }
      )
    }
  )
}

describe('@void0/eslint-config', (): void => {
  test('extends all files', async (): Promise<void> => {
    expect.assertions(1)
    const files = await getFiles()
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    expect(eslintConfig.extends).toHaveLength(Object.keys(files).length)
  })

  test('has the correct environment', (): void => {
    expect.assertions(1)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    expect(eslintConfig.env).toStrictEqual({
      es6: true,
      node: true,
    })
  })

  test('extended files contain rules', async (): Promise<void> => {
    expect.hasAssertions()
    const files = await getFiles()

    Object.keys(files).forEach((name: string): void => {
      expect(files[name].rules).toBeInstanceOf(Object)
    })
  })
})
