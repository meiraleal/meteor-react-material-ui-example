import {Meteor} from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

const schema = new SimpleSchema({
    name: String
});

const Specialties = new Mongo.Collection('specialties');
Specialties.attachSchema(schema);

Meteor.startup(function(){
    });

export default Specialties;
