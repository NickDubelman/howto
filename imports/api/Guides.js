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
  }
})

export default Guides