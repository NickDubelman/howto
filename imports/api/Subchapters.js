import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import { check } from 'meteor/check'
 
const Subchapters = new Mongo.Collection('Subchapters')
export default Subchapters

Meteor.methods({
  'Subchapters.insert'(chapterId, name){
    check(name, String)
    console.log(chapterId, name)

    if ( name === '' 
      || name === null 
      || name.trim() === ''){
      throw new Meteor.Error('Empty Subchapter name');
    }

    if(this.userId){
      Subchapters.insert({
        name,
        chapterId,
        creator: this.userId,
        content: '',
      })
    }
    else{
      throw new Meteor.Error('Not authorized');
    }
  },
  'Subchapters.remove'(subchapterId){
    check(subchapterId, String)
    if(Subchapters.findOne({_id: subchapterId}).creator != this.userId){
      throw new Meteor.Error('This subchapter does not belong to you, silly hacker.');
    }
    else{
      Subchapters.remove(subchapterId)
    }
  },
})