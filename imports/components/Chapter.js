import React from 'react'
import { createContainer } from 'meteor/react-meteor-data'
import { Link } from 'react-router'

import Subchapters from '/imports/api/Subchapters'
import NewSubchapterForm from '/imports/components/NewSubchapterForm'
import SubchapterContent  from '/imports/components/SubchapterContent'

const Chapter = ({params, subchapters}) => (
  <div className="content-container">
    <NewSubchapterForm chapterId={params.chapterId}/>
    {subchapters.map(
        (subchapter) => 
          <div key={subchapter._id} className="subchapterLink">
            <span>
              <h4 style={subchapterTitle}>{subchapter.name}</h4> 
            </span>
            <span onClick={()=>Meteor.call('Subchapters.remove', subchapter._id)} className="deleteIcon"> &#10060; </span>
            <SubchapterContent subchapterId={subchapter._id} content={subchapter.content} />
          </div>
    )}
  </div>
)

let subchapterTitle={
  display: 'inline-block',
}

export default createContainer(({params})=>{
  return {
    subchapters: Subchapters.find({chapterId: params.chapterId}).fetch()
  }
}, Chapter)