import { existsSync } from 'node:fs'
import { defineCommand } from 'citty'
import { confirm } from '@clack/prompts'
import { createConfigFile, defaultRcPath } from '../utils/config'

export default defineCommand({
  meta: {
    name: 'init',
    description: 'Generate configuration file',
  },
  async run() {
    if (existsSync(defaultRcPath)) {
      const shouldContinue = await confirm({
        message: 'Configuration file already exists. Overwrite?',
      })

      if (shouldContinue)
        createConfigFile()
    }

    else {
      createConfigFile()
    }
  },
})
