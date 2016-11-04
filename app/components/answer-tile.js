import Ember from 'ember';

export default Ember.Component.extend({
  adminCensorAnswers: Ember.inject.service(),
  actions:{
    delete(answer){
      this.sendAction("destroyAnswer",answer);
    },
    editAnswer(answer, params){
      this.sendAction('editAnswer',answer, params);
    },
    upVote(answer){
      this.sendAction('upVote',answer);
    },
    downVote(answer){
      this.sendAction('downVote',answer);
    },
    reportAnswer(answer){
      alert("An Admin will look into this report momentarily");
      this.get('adminCensorAnswers').add(answer);
    }
  }
});
