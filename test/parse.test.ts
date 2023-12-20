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
    expect(gitUrlParse('http://192.168.0.194:8000/hello/word')).toMatchInlineSnapshot(`
      {
        "domain": "192.168.0.194:8000",
        "name": "word",
        "owner": "hello",
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

  it('invalid', () => {
    expect(gitUrlParse('https://www.google.com')).toMatchInlineSnapshot(`null`)
  })
})
