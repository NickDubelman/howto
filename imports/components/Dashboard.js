import React from 'react'
import { createContainer } from 'meteor/react-meteor-data'

import Guides from '/imports/api/Guides'
import ChapterTitle from '/imports/components/ChapterTitle'
import ChapterInformation from '/imports/components/ChapterInformation'
import LogIn from '/imports/components/LogIn'
import NewGuideForm from '/imports/components/NewGuideForm'
import MyGuides from '/imports/components/MyGuides'

const Dashboard = ({loggedIn, guides}) => {
  if (loggedIn){
    return(
      <div className="content-container">
        <a onClick={()=>AccountsTemplates.logout()}> Logout</a>
        <br />
        <br />
        <NewGuideForm />
        <MyGuides guides={guides} />
      </div>
    )
  }
  return(
    <div className="content-container">
      <LogIn />
    </div>
  )
}

export default createContainer(({loggedIn})=>{
  return{
    loggedIn,
    guides: Guides.find({creator: Meteor.userId()}).fetch()
  }
} , Dashboard)
