import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestions: Ember.inject.service(),
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
      this.get('favoriteQuestions').remove(answer);
      this.get('adminCensorAnswers').remove(answer);
      this.sendAction('deleteReportedAnswer', answer);
    },
    deleteQuestion(question){
      this.get('favoriteQuestions').remove(question);
      this.get('adminCensor').remove(question);
      this.sendAction('deleteQuestion',question);
    }
  }
});
