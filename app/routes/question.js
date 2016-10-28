import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('question',params.question_id);
  },
  actions:{
    updateQuestion(updatedQuestion, params) {
        Object.keys(params).forEach(function(key){
          if(params[key]!==undefined && params[key]!=="") {
            updatedQuestion.set(key, params[key]);
          }
        });
        updatedQuestion.save();
        this.transitionTo('question');
      },
      
    //refractor to delete all answers associated as well
    destroyQuestion(question){
      question.destroyRecord();
      this.transitionTo('index');
    }

  }

});
