import DS from 'ember-data';
import config from 'fms-client/config/environment';
import Ember from 'ember';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

const { apiNamespace, apiHost } = config;
const { JSONAPIAdapter } = DS;
const { String: { underscore, pluralize } } = Ember;

export default JSONAPIAdapter.extend(DataAdapterMixin, {
  coalesceFindRequests: true,
  host: apiHost,
  namespace: apiNamespace,
  authorizer: 'authorizer:oauth2',

  pathForType(type) {
    return underscore(pluralize(type));
  }
});
