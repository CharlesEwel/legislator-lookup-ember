import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model: function(params) {
    var key = config.myApiKey;
    var url = 'http://congress.api.sunlightfoundation.com/bills?apikey='+key+'&bill_id=' + params.bill_id;
    return Ember.$.getJSON(url).then(function(responseJSON){
      return responseJSON.results[0];
      console.log(responseJSON.results[0])
    });
  }
});
