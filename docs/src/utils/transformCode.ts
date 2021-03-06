import * as Babel from 'babel-standalone'
import * as React from 'react'
import * as XlVision from '../../../src/components'

export function encodeCode(code: string) {
  return code.replace(/\\n/g, '\\\\n').replace(/\n/g, '\\n')
}

export function decodeCode(code: string) {
  return code.replace(/\\n/g, '\n').replace(/\\\\n/g, '\\n')
}

export function transformCode(code: string) {
  const tramsform: string = Babel.transform(code, {
    presets: ['es2015', 'react']
  }).code
  return `var exports = {}\n${tramsform}\nreturn exports.default`
}

export function renderCode(code: string, transform = true) {
  let newCode = code
  if (transform) {
    newCode = transformCode(newCode)
  }
  const args = ['React']
  const argv: any[] = [React]
  for (const key of Object.keys(XlVision)) {
    args.push(key)
    // @ts-ignore
    argv.push(XlVision[key])
  }
  args.push(newCode)
  const Ele = new Function(...args).apply(undefined, argv)
  return React.createElement(Ele)
}
