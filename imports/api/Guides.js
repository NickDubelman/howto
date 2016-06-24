import {check} from 'meteor/check'

const Guides = new Mongo.Collection('Guides')

Meteor.methods({
  'Guides.create'(name){
    check(name, String)

    console.log(name)

    if ( name === ''
      || name === null
      || name.trim() === ''){
        throw new Meteor.Error('Empty Guide name')
    }

    if (this.userId){
      Guides.insert({
        name,
        creator: this.userId,
        chapters: [],
        image: '',
      })
    }
    else throw new Meteor.Error('not authorized')
  },
  'Guides.remove'(guideId){
    check(guideId, String)
    if(Guides.findOne({_id: guideId}).creator != this.userId){
      throw new Meteor.Error('This Guide does not belong to you, silly hacker.');
    }
    else{
      Guides.remove(guideId)
    }
  }
})

export default Guides