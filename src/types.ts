export interface RepoMeta {
  domain: string
  owner: string
  name: string
}

export interface Config {
  root: string
  alias: Record<string, string>
}
