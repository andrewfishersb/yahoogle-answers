import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['upvote:desc'],
  sortedUpvotes: Ember.computed.sort('question.answers', 'sortBy'),
  actions:{
    delete(question){
      if(confirm("Are you sure?")){
        this.sendAction("destroyQuestion",question);
      }
    },
    updateQuestion(updatedQuestion,params){
      this.sendAction("updateQuestion", updatedQuestion, params);
    },
    saveAnswer(params){
      this.sendAction("saveAnswer",params);
    },
    destroyAnswer(answer){
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
  }
});
