import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var url = 'http://congress.api.sunlightfoundation.com/upcoming_bills?range=day&apikey=b6c5123cfa5d496e97b9f3bc2c9c3608&per_page=all' ;
    return Ember.$.getJSON(url).then(function(responseJSON){
      return responseJSON.results;
    });
  }
});
