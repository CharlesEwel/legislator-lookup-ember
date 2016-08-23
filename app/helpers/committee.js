import Ember from 'ember';

export function committee(params) {
  var url = 'http://congress.api.sunlightfoundation.com/committees?apikey=b6c5123cfa5d496e97b9f3bc2c9c3608&committee_id=' + params[0];
  console.log(params[0])
  return Ember.$.getJSON(url).then(function(responseJSON){
    console.log(responseJSON.results[0].name)
    return responseJSON.results[0];
  });
}

export default Ember.Helper.helper(committee);
