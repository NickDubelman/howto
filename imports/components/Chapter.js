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
          <div style={subchapterContainer} className='overlay'>
            <div key={subchapter._id} className="subchapterLink">
              <span>
                <h1 style={subchapterTitle}>{subchapter.name}</h1> 
              </span>
              <span onClick={()=>Meteor.call('Subchapters.remove', subchapter._id)} className="deleteIcon"> &#10060; </span>
              <SubchapterContent subchapterId={subchapter._id} content={subchapter.content} />
            </div>
          </div>
    )}
  </div>
)

let subchapterTitle={
  display: 'inline-block',
}

let subchapterContainer={
  marginBottom: 10,
}

export default createContainer(({params})=>{
  return {
    subchapters: Subchapters.find({chapterId: params.chapterId}).fetch()
  }
}, Chapter)