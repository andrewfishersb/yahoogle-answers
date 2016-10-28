import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    delete(question){
      if(confirm("Are you sure?")){
        this.sendAction("destroyQuestion",question);
      }
    },
    //do i need params and questions here? or in the send action?
    updateQuestion(updatedQuestion,params){
      this.sendAction("updateQuestion", updatedQuestion, params);
    }
  }
});
