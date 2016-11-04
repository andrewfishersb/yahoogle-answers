import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    deleteReportedAnswer(answer){
      answer.destroyRecord();
      this.transitionTo('admin');
    },
    deleteQuestion(question){
      var question_deletions = question.get('answers').map(function(answer){
        return answer.destroyRecord();
      });
      Ember.RSVP.all(question_deletions).then(function(){
        return question.destroyRecord();
      });
    }
  }
});
