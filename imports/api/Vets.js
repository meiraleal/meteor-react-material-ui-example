import SimpleSchema from 'simpl-schema';
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
                let specialties = Specialties.find().fetch();
                return specialties.map((obj) => {
                    return {label: obj.name, value: obj.name}
                });
            }
        }
    },
    'specialties.$': String
});


const Vets = new Mongo.Collection('vets');
Vets.attachSchema(schema);
export default Vets;
