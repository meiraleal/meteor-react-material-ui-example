import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { Mongo } from 'meteor/mongo';
import LongTextField from 'uniforms-material/LongTextField';
import Pets from './Pets';

const schema = new SimpleSchema({
    pet: {
        type: String,
        uniforms: {
            options: () => {
                Meteor.subscribe('Collection.all', 'Pets');
                const pets = Pets.find().fetch();
                console.log(pets);
                return pets.map(pet => ({ label: pet.name, value: pet._id }));
            },
        },
    },
    visitDate: Date,
    description: {
        type: String,
        uniforms: {
            component: LongTextField,
            rows: 5
        }
    }
});

const Visits = new Mongo.Collection('visits');

Visits.attachSchema(schema);

Visits.allow({
    insert() { return true; },
    update() { return true; },
    remove() { return true; },
});

export default Visits;
