import Ember from 'ember';

export default Ember.Component.extend({
  committeeName: Ember.computed('committeeId', function(){
    var url = 'http://congress.api.sunlightfoundation.com/committees?apikey=b6c5123cfa5d496e97b9f3bc2c9c3608&committee_id=' + this.get('committeeId');
    return Ember.$.getJSON(url).then(function(responseJSON){
      console.log(responseJSON.results[0].name)
      return responseJSON.results[0].name;
    })
  })
});
