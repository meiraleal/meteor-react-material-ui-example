import SimpleSchema from 'simpl-schema';
import Types from './Types';

SimpleSchema.extendOptions(['uniforms']);
const Pets = new Mongo.Collection('pets');
const schema = new SimpleSchema({
    name: String,
    petType: {
        type: String,
        uniforms: {
            options: () => {
                let types = Types.find().fetch();
                return types.map((type) => {
                    return {label: type.name, value: type.name}
                });

            }
        }
    },
    birthDate: {
        type: String,
        optional: false
    }
});
Pets.attachSchema(schema);
export default Pets;
