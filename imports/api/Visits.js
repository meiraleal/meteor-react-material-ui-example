import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import LongTextField from 'uniforms-material/LongTextField';
import Customers from './Customers';
import Vets from './Vets';


const schema = new SimpleSchema({
  pet: {
    type: String,
    uniforms: {
      options: () => {
        Meteor.subscribe('Collection.all', 'Customers');
        const customers = Customers.find().fetch();
        const options = [];
        customers.map(customer =>
                              customer.pets.map(pet =>
                                                options.push({ label: `${pet.name} - ${customer.name}`,
                                                  value: `${pet.name} - ${customer.name}` })));
        return options;
      },
    },
  },
  veterinary: {
    type: String,
    uniforms: {
      options: () => {
        Meteor.subscribe('Collection.all', 'Vets');
        const vets = Vets.find().fetch();
        return vets.map(vet => ({ label: vet.name, value: vet.name }));
      },
    },
  },
  visitDate: Date,
  description: {
    type: String,
    uniforms: {
      component: LongTextField,
      rows: 5,
    },
  },
});

const Visits = new Mongo.Collection('visits');

Visits.attachSchema(schema);

Visits.allow({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

export default Visits;
