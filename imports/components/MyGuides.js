import React from 'react'

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
              <div key={guide._id}>
                {guide.name} 
              </div>
        )}
      </div>
    )
  }
})

export default MyGuides