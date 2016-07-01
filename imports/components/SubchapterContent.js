import React, {Component} from 'react'

export default class SubchapterContent extends Component{
  constructor(props){
    super(props)
    this.state = {editing: false}
    this.startEditing = this.startEditing.bind(this)
    this.doneEditing = this.doneEditing.bind(this)
  }
  startEditing(){
    this.setState({editing: true})
  }
  doneEditing(){
    this.setState({editing: false})
    let subchapterId = this.props.subchapterId
    Meteor.call('Subchapters.updateContent', subchapterId, this.refs.content.value)
  }
  render(){
    let renderedContent
    if(this.state.editing === true){
      renderedContent=(
        <span>
          <textarea ref='content' style={editableText} defaultValue={this.props.content} />
          <button onClick={this.doneEditing}>Done</button>
        </span>
      )
    }
    else renderedContent = <span onClick={this.startEditing} style={subchapterContent}>{this.props.content}</span> 
    return renderedContent
  }
}

let subchapterContent = {
  display: 'block',
}

let editableText = {
  display: 'block',
}

export default SubchapterContent