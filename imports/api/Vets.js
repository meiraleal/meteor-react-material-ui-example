import SimpleSchema from 'simpl-schema';
import { Mongo } from 'meteor/mongo';
import Specialties from './Specialties';

SimpleSchema.extendOptions(['uniforms']);
const schema = new SimpleSchema({
  firstName: String,
  lastName: String,
  specialties: {
    type: Array,
    optional: true,
    uniforms: {
      checkboxes: true,
      options: () => {
        Meteor.subscribe('Collection.all', 'Specialties');
        const specialties = Specialties.find().fetch();
        return specialties.map(obj => ({ label: obj.name, value: obj.name }));
      },
    },
  },
  'specialties.$': String,
});


const Vets = new Mongo.Collection('vets');

Vets.attachSchema(schema);

Vets.allow({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

export default Vets;
