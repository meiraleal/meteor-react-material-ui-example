import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Types from '../imports/api/Types';
import Specialties from '../imports/api/Specialties';
import collections from '../imports/startup/lib/collections';

Meteor.startup(() => {
  Meteor.publish('Collection.all', (coll) => {
    check(coll, String);
    const data = coll && collections[coll] ? collections[coll].find({}) : {};
    return data;
  });

  if (Types.find().count() === 0) {
    Types.insert({ name: 'dog' });
    Types.insert({ name: 'cat' });
    Types.insert({ name: 'hamster' });
  }

  if (Specialties.find().count() === 0) {
    Specialties.insert({ name: 'dental' });
    Specialties.insert({ name: 'emergency' });
    Specialties.insert({ name: 'orthopaedic' });
  }
});
