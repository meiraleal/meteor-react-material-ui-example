import SimpleSchema from 'simpl-schema';
import Pets from './Pets';
const schema = new SimpleSchema({
    description: String,
    pet: String,
    pet: {
        type: String,
        uniforms: {
            options: () => {
                let pets = Pets.find().fetch();
                return pets.map((pet) => {
                    return {label: pet.name, value: pet._id}
                });
            }
        }
    },
    visitDate: Date
});

const Visits = new Mongo.Collection('visits');
Visits.attachSchema(schema);
export default Visits;
