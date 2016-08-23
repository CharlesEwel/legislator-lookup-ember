import Ember from 'ember';
import config from '../config/environment';

export default Ember.Component.extend({
  billName: Ember.computed('billId', function(){
    var key = config.myApiKey;
    var url = 'http://congress.api.sunlightfoundation.com/bills?apikey='+ key+'&bill_id=' + this.get('billId');
    var that=this;
    var result = Ember.$.getJSON(url).then(function(responseJSON){
      that.set('billName', responseJSON.results[0].short_title);
    })
  })
});
