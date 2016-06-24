import React, { Component } from 'react'

class NewGuideForm extends Component{
  constructor(){
  	super()
  	this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event){
  	event.preventDefault()
  	const guideName = this.refs.guideName.value
    if ( guideName === '' 
      || guideName === null 
      || guideName.trim() === ''){
      alert("Guide name cannot be empty")
    }
    else{
    	Meteor.call('Guides.create', this.refs.guideName.value)
    	this.refs.newGuideForm.reset()
    }
  }
  render(){
  	return(
	  <form ref="newGuideForm" onSubmit={this.handleSubmit}>
	  	<input ref="guideName" type="text"></input>
	    <button type="submit">New Guide</button>
	  </form>
	)
  }

}

export default NewGuideForm