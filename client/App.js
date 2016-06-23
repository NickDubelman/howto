import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { createContainer } from 'meteor/react-meteor-data' 

import Sidebar from '/imports/components/Sidebar'
import Dashboard from '/imports/components/Dashboard'

function App({loggedIn}){
  return(
    <div>
      <Sidebar />
      <Dashboard loggedIn={loggedIn}/>
    </div>    
  )
}

const AppContainer = createContainer(()=>{
  return {
    loggedIn: !!Meteor.userId(),
  }
}, App)


Meteor.startup( () => {
  ReactDOM.render(<AppContainer />, document.querySelector('#app'))
})


