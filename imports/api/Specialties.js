import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const schema = new SimpleSchema({
  name: String,
});

const Specialties = new Mongo.Collection('specialties');

Specialties.attachSchema(schema);

Specialties.allow({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

export default Specialties;
