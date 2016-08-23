import Ember from 'ember';

export function listCount(params) {
  var list = params[0];

  return list.get('length')
}

export default Ember.Helper.helper(listCount);
