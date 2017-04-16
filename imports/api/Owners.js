import SimpleSchema from 'simpl-schema';
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
        uniforms: () => false
    },
    'pets.$': String
});

const Owners = new Mongo.Collection('owners');
Owners.attachSchema(schema);
export default Owners;
