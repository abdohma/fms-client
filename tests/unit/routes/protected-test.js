import { moduleFor, test } from 'ember-qunit';

moduleFor('route:protected', 'Unit | Route | protected', {
  needs: ['service:session']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
