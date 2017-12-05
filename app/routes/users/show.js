import Protected from 'fms-client/routes/protected';

export default Protected.extend({
  model(params) {
    return this.store.findRecord('user', params.id);
  }
});
