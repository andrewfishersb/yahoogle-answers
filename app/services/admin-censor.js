import Ember from 'ember';

export default Ember.Service.extend({
  reportedEntries: [],

  add(entry){
    this.get('reportedEntries').pushObject(entry);
  },
  remove(entry){
    this.get('reportedEntries').removeObject(entry);
  }
});
