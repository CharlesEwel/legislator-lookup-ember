import Ember from 'ember';

export function subcommitteeIcon(params) {
  var committee = params[0];

  if(committee.subcommittees.length > 0) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>')
  }
}

export default Ember.Helper.helper(subcommitteeIcon);
