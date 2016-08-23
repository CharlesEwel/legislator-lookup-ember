import Ember from 'ember';

export function subcommitteeIcon(params) {
  var committee = params[0];
  console.log(committee);

  if(committee.subcommittees.length > 0) {
  console.log('in if');
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>')
  }
}

export default Ember.Helper.helper(subcommitteeIcon);
