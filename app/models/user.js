import DS from 'ember-data';

const { attr, Model } = DS;

export default Model.extend({
  admin: attr('boolean'),
  email: attr('string'),
  name: attr('string'),
  password: attr('string'),

  // system
  createdAt: attr('date'),
  lastSignInAt: attr('date'),
  updatedAt: attr('date')
});
