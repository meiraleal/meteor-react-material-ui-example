import {Meteor} from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

const schema = new SimpleSchema({
    name: String
});

const Types = new Mongo.Collection('types');
Types.attachSchema(schema);

export default Types;
