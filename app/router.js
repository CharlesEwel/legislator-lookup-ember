import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('results', {path: '/results/:zip'});
  this.route('committees');
  this.route('committee', {path: '/committee/:committee_id'});
  this.route('bills');
  this.route('bill', {path: '/bill/:bill_id'});
  this.route('upcoming-house-bills');
  this.route('sponsor', {path: 'sponsor/:sponsor_id'});
  this.route('upcoming-bills', {path: 'upcoming-bills/:chamber'});
});

export default Router;
