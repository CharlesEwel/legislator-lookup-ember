import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = 'http://congress.api.sunlightfoundation.com/bills?apikey=b6c5123cfa5d496e97b9f3bc2c9c3608&bill_id=' + params.bill_id;
    return Ember.$.getJSON(url).then(function(responseJSON){
      return responseJSON.results[0];
      console.log(responseJSON.results[0])
    });
  }
});
