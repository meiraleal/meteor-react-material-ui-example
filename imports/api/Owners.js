import SimpleSchema from 'simpl-schema';
import { Mongo } from 'meteor/mongo';
SimpleSchema.extendOptions(['uniforms']);
const schema = new SimpleSchema({
  firstName: String,
  lastName: String,
  city: String,
  address: String,
  telephone: String,
  pets: {
    type: Array,
    optional: true,
    uniforms: () => false,
  },
  'pets.$': String,
});

const Owners = new Mongo.Collection('owners');

Owners.attachSchema(schema);

Owners.allow({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

export default Owners;
