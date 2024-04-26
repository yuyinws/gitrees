import { defineCommand } from 'citty'
import { bold, cyanBright, redBright } from 'colorette'
import { execaCommandSync } from 'execa'
import clipboard from 'clipboardy'
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
      const filterArgs = rawArgs.filter(arg => arg !== '-e')
      const { command, clonePath } = getCloneCommand(filterArgs, parsed)
      execaCommandSync(command, { stdio: 'inherit' })
      clipboard.writeSync(`cd ${clonePath}`)
      console.log(bold(cyanBright(`cd ${clonePath} (Copied ✓)`)))
    }
  },
})
