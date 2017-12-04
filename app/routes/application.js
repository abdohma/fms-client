import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const { inject: { service }, Route } = Ember;

export default Route.extend(ApplicationRouteMixin, {
  session: service(),

  beforeModel() {
    this._super(...arguments);

    if (!this.get('session.isAuthenticated')) {
      this.transitionTo('login');
    }
  }
});
