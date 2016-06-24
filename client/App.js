import React, { Component } from 'react'
import { render }from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { createContainer } from 'meteor/react-meteor-data' 

import Sidebar from '/imports/components/Sidebar'
import Dashboard from '/imports/components/Dashboard'
import Guide from '/imports/components/Guide'

function App(props){
  let content
  if (props.children){
    content = React.cloneElement(props.children, {...props})
  }
  return(
    <div>
      <Sidebar />
      {content}
    </div>    
  )
}

const AppContainer = createContainer(()=>{
  return {
    loggedIn: !!Meteor.userId(),
  }
}, App)


Meteor.startup( () => {
  render((
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={Dashboard}/>
        <Route path="/guide/:guideId" component={Guide} />
      </Route>

    </Router>
  ), document.querySelector('#app'))
})


