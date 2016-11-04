import Ember from 'ember';

export default Ember.Component.extend({
  adminCensor: Ember.inject.service(),
  adminCensorAnswers: Ember.inject.service()

});
