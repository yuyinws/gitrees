import { defineCommand, renderUsage, runMain, showUsage } from 'citty'
import { version } from '../package.json'

const main = defineCommand({
  meta: {
    name: 'gt',
    version,
    description: 'Git tree structure cli tools',
  },
  args: {
    // name: {
    //   type: 'positional',
    //   description: 'Your name',
    //   required: true,
    // },
    // friendly: {
    //   type: 'boolean',
    //   description: 'Use friendly greeting',
    // },
    url: {
      type: 'positional',
      description: 'Initialize project',
    },
  },
  run(a) {
    console.log(a)
    // console.log(`${args.friendly ? 'Hi' : 'Greetings'} ${args.name}!`)
  },
})

runMain(main)
