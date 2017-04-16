import SimpleSchema from 'simpl-schema';
import { Mongo } from 'meteor/mongo';
import Types from './Types';

SimpleSchema.extendOptions(['uniforms']);
const Pets = new Mongo.Collection('pets');
const schema = new SimpleSchema({
  name: String,
  petType: {
    type: String,
    uniforms: {
      options: () => {
        const types = Types.find().fetch();
        return types.map(type => ({ label: type.name, value: type.name }));
      },
    },
  },
  birthDate: {
    type: String,
    optional: false,
  },
});

Pets.attachSchema(schema);

Pets.allow({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

export default Pets;
