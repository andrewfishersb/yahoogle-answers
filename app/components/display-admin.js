import Ember from 'ember';

export default Ember.Component.extend({
  adminCensor: Ember.inject.service(),
  adminCensorAnswers: Ember.inject.service(),
  actions: {
    dismissAnswerClaim(answer){
      this.get('adminCensorAnswers').remove(answer);
    },
    dismissQuestionClaim(question){
      this.get('adminCensor').remove(question);
    },
    deleteReportedAnswer(answer){
      this.sendAction('deleteReportedAnswer', answer);
    },
    deleteQuestion(question){
      this.sendAction('deleteQuestion',question);
    }
  }
});
