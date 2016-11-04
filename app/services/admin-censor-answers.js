import Ember from 'ember';

export default Ember.Service.extend({
  reportedAnswers: [],

  add(answer){
    this.get('reportedAnswers').pushObject(answer);
  },
  remove(answer){
    this.get('reportedAnswers').removeObject(answer)
  }
});
