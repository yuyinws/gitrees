# Gitrees

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

Organize your local git repositories in a tree structure:

```
~/Projects
└── github
    └── <GitHub org / username>
        └── <GitHub repo name>
```

![Kapture 2024-01-24 at 09.40.50](https://cdn.jsdelivr.net/gh/yuyinws/static@master/2024/01/upgit_20240124_1706060562.gif)

## Why

This project is highly inspired by [this post](https://hirok.io/posts/github-tree-structure). You can read it for more information.

## Usage

### Install

```shell
npm install -g gitrees
```

### init config

```shell
gt init
```

It will generate a config file named `.gtrc.json` on your home directory:

```json
{
  // Alias for remote git repository address
  "alias": {
    "github.com": "github",
    "gitlab.com": "gitlab",
    "you-company.com": "company"
  },
  // Root directory for storing all local repositories.
  "root": "/Users/hostname/Projects"
}
```

### Clone a repository
```shell
gt clone https://github.com/vuejs/core.git
```
Will convert to:

```shell
git clone https://github.com/vuejs/core.git /Users/hostname/Projects/github/vuejs/core
```
---

```shell
gt clone https://your-company.com/test/demo.git
```
Will convert to:

```shell
git clone https://your-company.com/test/demo.git /Users/hostname/Projects/company/test/demo
```

## License

[MIT](./LICENSE) License © 2023-PRESENT [yuyinws](https://github.com/yuyinws)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/gitrees?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/gitrees
[npm-downloads-src]: https://img.shields.io/npm/dm/gitrees?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/gitrees
[license-src]: https://img.shields.io/github/license/yuyinws/gitrees.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/yuyinws/gitrees/blob/main/LICENSE
