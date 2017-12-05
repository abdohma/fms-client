import Protected from 'fms-client/routes/protected';

export default Protected.extend({
  model() {
    return this.store.findAll('user');
  }
});
