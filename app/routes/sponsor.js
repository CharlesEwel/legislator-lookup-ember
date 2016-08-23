import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = 'http://congress.api.sunlightfoundation.com/legislators?apikey=b6c5123cfa5d496e97b9f3bc2c9c3608&bioguide_id=' + params.sponsor_id;
    return Ember.$.getJSON(url).then(function(responseJSON){
      return responseJSON.results[0];
    });
  }
});
