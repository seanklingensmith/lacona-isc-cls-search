/** @jsx createElement */

import { createElement } from 'elliptical'
import { Command } from 'lacona-phrases'
import { runApplescript } from 'lacona-api'
import { openURL } from 'lacona-api'

import _ from 'lodash'
import classes from './classes'

const ISCClass = {
  describe() {

    let classlist = _.map(classes, (value) => {
      return (<literal text={value} value={encodeURIComponent(value)}/>)
    })

    return (
      <placeholder argument='classname'>
        <choice limit={8}>{classlist}</choice>
      </placeholder>
    )
  }
}

export const ISCClassDocs = {
  extends: [Command],

  execute (result) {
    let url = (
      'http://docs.intersystems.com/latest/csp/documatic/%25CSP.Documatic.cls?PAGE=CLASS'+
      '&LIBRARY='+(result.classname.substr(0,3)=="Ens"? "ENSLIB": "%25SYS")+
      '&CLASSNAME='+result.classname
    )
    openURL({url: url})
  },

  describe () {
    return (
      <sequence>
       <literal text='cls '/>
       <ISCClass id='classname'/>
      </sequence>      
    )
  }
}

export const extensions = [ISCClassDocs]
