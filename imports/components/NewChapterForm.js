import React, { Component } from 'react'

class NewChapterForm extends Component{
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event){
    event.preventDefault()
    const guideId = this.props.guideId
    const chapterName = this.refs.chapterName.value
    if ( chapterName === '' 
      || chapterName === null 
      || chapterName.trim() === ''){
      alert("Chapter name cannot be empty")
    }
    else{
      Meteor.call('Chapters.insert', guideId, chapterName)
      this.refs.newChapterForm.reset()
    }
  }
  render(){
    return(
    <form ref="newChapterForm" onSubmit={this.handleSubmit}>
      <input ref="chapterName" type="text"></input>
      <button type="submit">New Chapter</button>
    </form>
  )
  }

}

export default NewChapterForm