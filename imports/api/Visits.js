import SimpleSchema from 'simpl-schema';
import { Mongo } from 'meteor/mongo';
import Pets from './Pets';

const schema = new SimpleSchema({
  description: String,
  pet: {
    type: String,
    uniforms: {
      options: () => {
        const pets = Pets.find().fetch();
        return pets.map(pet => ({ label: pet.name, value: pet._id }));
      },
    },
  },
  visitDate: Date,
});

const Visits = new Mongo.Collection('visits');

Visits.attachSchema(schema);

Visits.allow({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

export default Visits;
