import React from 'react'
import { createContainer } from 'meteor/react-meteor-data'
import { Link } from 'react-router'

import Subchapters from '/imports/api/Subchapters'
import NewSubchapterForm from '/imports/components/NewSubchapterForm'

const Chapter = ({params, subchapters}) => (
  <div className="content-container">
    <NewSubchapterForm chapterId={params.chapterId}/>
    {subchapters.map(
        (subchapter) => 
          <div key={subchapter._id} className="subchapterLink">
            <span>
              {subchapter.name} 
            </span>
            <span onClick={()=>Meteor.call('Subchapters.remove', subchapter._id)} className="deleteIcon"> &#10060; </span>
          </div>
    )}
  </div>
)

export default createContainer(({params})=>{
  return {
    subchapters: Subchapters.find({chapterId: params.chapterId}).fetch()
  }
}, Chapter)