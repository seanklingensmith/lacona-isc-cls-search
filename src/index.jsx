/** @jsx createElement */
import { createElement } from 'elliptical'
import { Command } from 'lacona-phrases'
import { runApplescript } from 'lacona-api'

export const MyNewCommand = {
  extends: [Command],

  execute (result) {
    console.log('executing MyNewCommand')
    runApplescript({script: `display alert "${result}"`})
  },

  describe () {
    return (
      <literal
        text='test my new command'
        value='Hello, world!' />
    )
  }
}

export const extensions = [MyNewCommand]
