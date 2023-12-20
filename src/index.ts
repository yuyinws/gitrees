import { defineCommand, renderUsage, runMain, showUsage } from 'citty'
import { version } from '../package.json'
import { commands } from './commands'

const main = defineCommand({
  meta: {
    name: 'gt',
    version,
    description: 'Git tree structure cli tools',
  },
  subCommands: commands,
})

runMain(main)
