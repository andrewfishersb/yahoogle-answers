import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('question',params.question_id);
  },
  actions:{
    //refractor to delete all answers associated as well
    destroyQuestion(question){
      question.destroyRecord();
      this.transitionTo('index');
    }
  }

});
