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

    destroyQuestion(question){
      var question_deletions = question.get('answers').map(function(answer){
        return answer.destroyRecord();
      });
      Ember.RSVP.all(question_deletions).then(function(){
        return question.destroyRecord();
      });
      this.transitionTo('index');
    },

    saveAnswer(params){
      var newAnswer = this.store.createRecord('answer',params);

      var question = params.question;

      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function(){
        return question.save();
      });
      this.transitionTo('question',question);
    },
    destroyAnswer(answer){
      answer.destroyRecord();
      this.transitionTo('question');

    },
    editAnswer(answer, params){
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined && params[key]!==''){
          answer.set(key,params[key]);
        }
      });
      answer.save();
      this.transitionTo('question');
    },

    upVote(answer){
      var upVote = answer.get('vote')+1;
      answer.set('vote',upVote);
      answer.save();
    },

    downVote(answer){
      var downVote = answer.get('vote')-1;
      if(downVote<-5){
        answer.destroyRecord();
        this.transitionTo('question');
      }else{
        answer.set('vote',downVote);
        answer.save();
      }
    }
  }
});
