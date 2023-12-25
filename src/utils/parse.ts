import type { RepoMeta } from '../types'
import { getConfigField } from './config'

export function gitUrlParse(url: string): RepoMeta | null {
  const regexHttp = /^(?:https?|git|ssh|rsync)\:\/\/([^\/]+)\/([^\/]+)\/(.+)\.git/
  const matchHttp = url.match(regexHttp)

  const regexSsh = /^([^@]+)@([^:]+):([^\/]+)\/(.+)\.git/
  const matchSsh = url.match(regexSsh)

  if (matchHttp) {
    const domain = matchHttp[1]
    const owner = matchHttp[2]
    const name = matchHttp[3]

    return {
      domain,
      owner,
      name,
    }
  }
  else if (matchSsh) {
    const domain = matchSsh[2]
    const owner = matchSsh[3]
    const name = matchSsh[4]

    return {
      domain,
      owner,
      name,
    }
  }
  else {
    return null
  }
}

export function getCloneCommand(rawArgs: string[], repoMeta: RepoMeta) {
  let { domain, owner, name } = repoMeta
  const root = getConfigField<'root'>('root')
  const alias = getConfigField<'alias'>('alias')
  if (alias) {
    Object.keys(alias).forEach((key) => {
      if (domain.includes(key))
        domain = alias[key]
    })
  }
  const clonePath = `${`${root}/${domain}/${owner}/${name}`}`
  const command = `git clone ${rawArgs.join(' ')} ${clonePath}`
  return {
    command,
    clonePath,
  }
}
