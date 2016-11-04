import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    delete(answer){
      this.sendAction("destroyAnswer",answer);
    },
    editAnswer(answer, params){
      this.sendAction('editAnswer',answer, params);
    },
    upVote(answer){
      this.sendAction('upVote',answer);
    }
  }
});
