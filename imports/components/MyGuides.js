import React from 'react'
import { Link } from 'react-router'

let myGuideSubscription

const MyGuides = React.createClass({
  componentWillMount(){
    //myChecklistSubscription = Meteor.subscribe('myChecklists') 
  },
  componentWillUnmount(){
    //myChecklistSubscription.stop()
  },
  render() {
    return(
      <div>
        <h1>My Guides</h1>
        {this.props.guides.map(
            (guide) => 
              <div key={guide._id} className="guideLink">
                <Link to={`/guide/${guide._id}`} >
                  {guide.name} 
                </Link>
                <span className="deleteIcon"> &#10060; </span>
              </div>
        )}
      </div>
    )
  }
})

export default MyGuides