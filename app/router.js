import Ember from 'ember';
import config from './config/environment';

const { Router: EmberRouter } = Ember;

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('renewals');
  this.route('dashboard');
  this.route('employees');
  this.route('buses');
  this.route('route-allocations');
  this.route('route-permits');
  this.route('tires');
  this.route('tire-allocations');

  this.route('finance', function() {
    this.route('salary-calculation');
  });

  this.route('settings', function() {
    this.route('transaction-categories');
    this.route('transaction-types');
  });

  this.route('reports', function() {
    this.route('daily-income');
    this.route('tire-dagging');
    this.route('salary');
  });

  this.route('users', function() {
    this.route('new');
    this.route('edit', { path: ':id' });
    this.route('show', { path: ':id' });
  });
});

export default Router;
