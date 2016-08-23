import Ember from 'ember';

export default Ember.Component.extend({
  committeeName: Ember.computed('committeeId', function(){
    var url = 'http://congress.api.sunlightfoundation.com/committees?apikey=b6c5123cfa5d496e97b9f3bc2c9c3608&committee_id=' + this.get('committeeId');
    var that=this;
    var result = Ember.$.getJSON(url).then(function(responseJSON){
      that.set('committeeName', responseJSON.results[0].name);
    })
  })
});
