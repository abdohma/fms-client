import Ember from 'ember';

const { Component, computed: { alias, filter }, inject: { service } } = Ember;

export default Component.extend({
  session: service(),

  renewals: [],

  upcomingRenewalCount: alias('upcomingRenewals.length'),

  upcomingRenewals: filter('renewals', function(renewal) {
    return renewal.data.length;
  }),

  actions: {
    logout() {
      this.get('session').invalidate();
    }
  }
});
