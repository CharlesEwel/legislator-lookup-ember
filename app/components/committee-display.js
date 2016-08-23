import Ember from 'ember';
import config from '../config/environment';

export default Ember.Component.extend({
  committeeName: Ember.computed('committeeId', function(){
    var key = config.myApiKey;
    var url = 'http://congress.api.sunlightfoundation.com/committees?apikey='+key+'&committee_id=' + this.get('committeeId')[0];
    console.log(url)
    var that=this;
    var result = Ember.$.getJSON(url).then(function(responseJSON){
      that.set('committeeName', responseJSON.results[0].name);
    })
  })
});
