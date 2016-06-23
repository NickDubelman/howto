import React from 'react'

import ChapterTitle from '/imports/components/ChapterTitle'
import ChapterInformation from '/imports/components/ChapterInformation'
import LogIn from '/imports/components/LogIn'

const Dashboard = ({loggedIn}) => {
  if (loggedIn){
    return(
      <div className="content-container">
        <a onClick={()=>AccountsTemplates.logout()}> Logout</a>
        <ChapterTitle />
        <ChapterInformation />
      </div>
    )
  }
  return(
    <div className="content-container">
      <LogIn />
    </div>
  )
}

export default Dashboard
