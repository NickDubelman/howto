import React from 'react'
import { createContainer } from 'meteor/react-meteor-data'
import { Link } from 'react-router'

import Chapters from '/imports/api/Chapters'
import NewChapterForm from '/imports/components/NewChapterForm'

const Guide = ({params, chapters}) => (
  <div className="content-container">
    <NewChapterForm guideId={params.guideId}/>
    {chapters.map(
        (chapter) => 
          <div key={chapter._id} className="chapterLink">
            <Link to={`/chapter/${chapter._id}`} >
              {chapter.name} 
            </Link>
            <span onClick={()=>Meteor.call('Chapters.remove', chapter._id)} className="deleteIcon"> &#10060; </span>
          </div>
    )}
  </div>
)

export default createContainer(({params})=>{
  return {
    chapters: Chapters.find({guideId: params.guideId}).fetch()
  }
}, Guide)