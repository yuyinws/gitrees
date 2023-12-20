import { defineCommand, parseArgs } from 'citty'
import { redBright } from 'colorette'
import { execaCommand } from 'execa'
import { isConfigFileExist } from '../utils/config'
import { getCloneCommand, gitUrlParse } from '../utils/parse'

export default defineCommand({
  meta: {
    name: 'clone',
    description: 'Clone a repository',
  },
  async run({ args, rawArgs }) {
    if (!isConfigFileExist)
      return false

    const { _ } = args
    const repoUrl = _[0]
    const parsed = gitUrlParse(repoUrl)
    if (!parsed) {
      console.log(redBright('Invalid git url'))
      return false
    }
    else {
      const command = getCloneCommand(rawArgs, parsed)
      execaCommand(command, { stdio: 'inherit' })
    }
  },
})
