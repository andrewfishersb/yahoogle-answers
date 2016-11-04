import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    deleteReportedAnswer(answer){
      answer.destroyAnswer();
      this.transitionTo('admin');
    }
  }
});
