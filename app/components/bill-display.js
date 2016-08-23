import Ember from 'ember';

export default Ember.Component.extend({
  billName: Ember.computed('billId', function(){
    var url = 'http://congress.api.sunlightfoundation.com/bills?apikey=b6c5123cfa5d496e97b9f3bc2c9c3608&bill_id=' + this.get('billId');
    var that=this;
    var result = Ember.$.getJSON(url).then(function(responseJSON){
      that.set('billName', responseJSON.results[0].short_title);
    })
  })
});
