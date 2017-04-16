import SimpleSchema from 'simpl-schema';
import { Mongo } from 'meteor/mongo';
import Types from './Types';
SimpleSchema.extendOptions(['uniforms']);
const schema = new SimpleSchema({
    name: String,
    telephone: String,
    pets: {
        type: Array,
        optional: true,
    },
    'pets.$': Object,
    'pets.$.name': String,
    'pets.$.type': {
        type: String,
        uniforms: {
            options: () => {
                Meteor.subscribe('Collection.all', 'Types');
                const types = Types.find().fetch();
                return types.map(type => ({ label: type.name, value: type.name }));
            },
        },
    }
});

const Customers = new Mongo.Collection('customers');

Customers.attachSchema(schema);

Customers.allow({
    insert() { return true; },
    update() { return true; },
    remove() { return true; },
});

export default Customers;
