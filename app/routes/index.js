import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    zipLookup(params) {
      this.transitionTo('results', params.zip);
    },
    allCommittees() {
      this.transitionTo('committees')
    },
    allBills() {
      this.transitionTo('bills')
    },
    allUpcomingBills(chamber) {
      this.transitionTo('upcoming-bills', chamber)
    }
  }
});
