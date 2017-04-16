import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const schema = new SimpleSchema({
  name: String,
});

const Types = new Mongo.Collection('types');

Types.attachSchema(schema);

Types.allow({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

export default Types;
