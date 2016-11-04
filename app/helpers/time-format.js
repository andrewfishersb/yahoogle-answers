import Ember from 'ember';

export function timeFormat(params) {
  var date = params[0];
  return moment(date.data.time).format("dddd, MMMM Do YYYY, h:mm a");
}

export default Ember.Helper.helper(timeFormat);
