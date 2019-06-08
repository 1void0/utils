/* eslint-env jest */

import fs from 'fs'
import path from 'path'

/* eslint-disable-next-line import/no-commonjs, @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports */
const eslintConfig = require('../')

const getFiles = async (): Promise<object> =>
  new Promise(
    (resolve, reject): void => {
      fs.readdir(
        path.join(__dirname, '../rules'),
        (error, directoryFiles): void => {
          if (error) {
            reject(error)
          }

          const files = {}

          directoryFiles.forEach(
            async (name): Promise<void> => {
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

describe('@void0/eslint-config', (): void => {
  test('extends all files', async (): Promise<void> => {
    expect.assertions(1)
    const files = await getFiles()
    expect(eslintConfig.extends).toHaveLength(Object.keys(files).length)
  })

  test('has the correct environment', (): void => {
    expect.assertions(1)
    expect(eslintConfig.env).toStrictEqual({
      es6: true,
      node: true
    })
  })

  test('extended files contain rules', async (): Promise<void> => {
    expect.hasAssertions()
    const files = await getFiles()

    Object.keys(files).forEach(
      (name): void => {
        expect(files[name].rules).toBeInstanceOf(Object)
      }
    )
  })
})
