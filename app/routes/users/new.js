import Protected from 'fms-client/routes/protected';

export default Protected.extend({
  model() {
    return this.store.createRecord('user');
  },
});
