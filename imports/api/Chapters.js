import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import { check } from 'meteor/check'
 
const Chapters = new Mongo.Collection('Chapters')
export default Chapters

if (Meteor.isServer) {
  Meteor.publish('checklistChapters',function(checklistId){
    return Chapters.find({creator: this.userId, checklistId})
  })
}

Meteor.methods({
  'Chapters.insert'(guideId, name){
    check(name, String)
    console.log(guideId, name)

    if ( name === '' 
      || name === null 
      || name.trim() === ''){
      throw new Meteor.Error('Empty Chapter name');
    }

    if(this.userId){
      Chapters.insert({
        name,
        guideId,
        creator: this.userId,
        subchapters: [],
      })
    }
    else{
      throw new Meteor.Error('Not authorized');
    }
  },
  'Chapters.remove'(guideId){
    check(guideId, String)
    if(Chapters.findOne({_id: guideId}).creator != this.userId){
      throw new Meteor.Error('This guide does not belong to you, silly hacker.');
    }
    else{
      Chapters.remove(guideId)
    }
  },
})