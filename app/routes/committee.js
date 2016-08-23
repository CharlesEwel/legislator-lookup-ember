import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = 'http://congress.api.sunlightfoundation.com/committees?apikey=b6c5123cfa5d496e97b9f3bc2c9c3608&parent_committee_id=' + params.committee_id +'&subcommittee=true&per_page=all';
    return Ember.$.getJSON(url).then(function(responseJSON){
      return responseJSON.results;
    });
  }
});
