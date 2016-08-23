import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var url = 'http://congress.api.sunlightfoundation.com/committees?fields=chamber,committee_id,name,subcommittee,subcommittees&apikey=b6c5123cfa5d496e97b9f3bc2c9c3608&subcommittee=false&per_page=all';
    return Ember.$.getJSON(url).then(function(responseJSON){
      return responseJSON.results;
    });
  }
});
