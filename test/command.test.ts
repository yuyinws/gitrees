import { describe, expect, it, vi } from 'vitest'
import { getCloneCommand } from '../src/utils/parse'
import config from './fixtures/config.json'

vi.mock('node:fs', () => {
  return {
    readFileSync: vi.fn(() => JSON.stringify(config)),
    existsSync: vi.fn(() => true),
  }
})

describe('get command', () => {
  it('url', () => {
    expect(getCloneCommand(
      ['https://github.com/vuejs/core.git'],
      { domain: 'github.com', owner: 'vuejs', name: 'core' },
    )).toMatchInlineSnapshot(`"git clone https://github.com/vuejs/core.git /Users/home/Projects/github/vuejs"`)
  })

  it('ssh', () => {
    expect(getCloneCommand(
      ['git@github.com:vuejs/core.git'],
      { domain: 'github.com', owner: 'vuejs', name: 'core' },
    )).toMatchInlineSnapshot(`"git clone git@github.com:vuejs/core.git /Users/home/Projects/github/vuejs"`)
  })

  it('args1', () => {
    expect(getCloneCommand(
      ['git@github.com:vuejs/core.git', '-b', 'dev'],
      { domain: 'github.com', owner: 'vuejs', name: 'core' },
    )).toMatchInlineSnapshot(`"git clone git@github.com:vuejs/core.git -b dev /Users/home/Projects/github/vuejs"`)
  })

  it('args2', () => {
    expect(getCloneCommand(
      ['git@github.com:vuejs/core.git', '--recursive'],
      { domain: 'github.com', owner: 'vuejs', name: 'core' },
    )).toMatchInlineSnapshot(`"git clone git@github.com:vuejs/core.git --recursive /Users/home/Projects/github/vuejs"`)
  })

  it('args3', () => {
    expect(getCloneCommand(
      ['--depth=1', 'https://github.com/vuejs/core'],
      { domain: 'github.com', owner: 'vuejs', name: 'core' },
    )).toMatchInlineSnapshot(`"git clone --depth=1 https://github.com/vuejs/core /Users/home/Projects/github/vuejs"`)
  })
})
