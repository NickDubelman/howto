import React, { Component } from 'react'

class NewSubChapterForm extends Component{
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event){
    event.preventDefault()
    const chapterId = this.props.chapterId
    const subchapterName = this.refs.subchapterName.value
    if ( subchapterName === '' 
      || subchapterName === null 
      || subchapterName.trim() === ''){
      alert("SubChapter name cannot be empty")
    }
    else{
      Meteor.call('Subchapters.insert', chapterId, subchapterName)
      this.refs.newSubchapterForm.reset()
    }
  }
  render(){
    return(
    <form ref="newSubchapterForm" onSubmit={this.handleSubmit}>
      <input ref="subchapterName" type="text"></input>
      <button type="submit">New SubChapter</button>
    </form>
    )
  }
}

export default NewSubChapterForm