import { describe, expect, it } from 'vitest'
import { gitUrlParse } from '../src/utils/parse'

describe('git url parse', () => {
  it('https', () => {
    expect(gitUrlParse('https://github.com/vuejs/core.git')).toMatchInlineSnapshot(`
      {
        "domain": "github.com",
        "name": "core",
        "owner": "vuejs",
      }
    `)
  })

  it('ssh', () => {
    expect(gitUrlParse('git@github.com:vuejs/core.git')).toMatchInlineSnapshot(`
      {
        "domain": "github.com",
        "name": "core",
        "owner": "vuejs",
      }
    `)
  })

  it('ip http', () => {
    expect(gitUrlParse('http://192.168.0.194:8000/slmc/slmc-webview.git')).toMatchInlineSnapshot(`
      {
        "domain": "192.168.0.194:8000",
        "name": "slmc-webview",
        "owner": "slmc",
      }
    `)
  })

  it('ip ssh', () => {
    expect(gitUrlParse('git@192.168.0.194:hello/my-git.git')).toMatchInlineSnapshot(`
      {
        "domain": "192.168.0.194",
        "name": "my-git",
        "owner": "hello",
      }
    `)
  })

  it('dot', () => {
    expect(gitUrlParse('git@github.com:yuyinws/yuy1n.io.git')).toMatchInlineSnapshot(`
      {
        "domain": "github.com",
        "name": "yuy1n.io",
        "owner": "yuyinws",
      }
    `)
  })

  it('invalid', () => {
    expect(gitUrlParse('https://www.google.com')).toMatchInlineSnapshot(`null`)
  })
})
