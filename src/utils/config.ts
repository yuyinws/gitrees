import { env, platform } from 'node:process'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'pathe'
import { blueBright, cyanBright, green, yellow } from 'colorette'
import type { Config } from '../types'

const home = platform === 'win32'
  ? env.USERPROFILE
  : env.HOME

export const defaultConfig = {
  alias: {
    'github.com': 'github',
  },
  root: `${home}/Develop`,
}

export const defaultRcPath = join(home || '~/', '.gtrc.json')

export function isConfigFileExist() {
  if (existsSync(defaultRcPath)) {
    return true
  }
  else {
    console.log(
      yellow(`Configuration file not found`),
      `please run ${blueBright('gt init')} first`,
    )
    return false
  }
}

export function createConfigFile() {
  writeFileSync(defaultRcPath, JSON.stringify(defaultConfig, null, 2))
  console.log(
    green(`Configuration file created at:`),
    cyanBright(defaultRcPath),
  )
}

export function getConfigField<T extends keyof Config>(field: T): Config[T] | null {
  if (existsSync(defaultRcPath)) {
    const config = JSON.parse(readFileSync(defaultRcPath, 'utf-8')) as Config
    return config[field]
  }

  else {
    return null
  }
}
