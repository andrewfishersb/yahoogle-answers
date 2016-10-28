import Ember from 'ember';

export default Ember.Component.extend({
  newAnswerForm: false,
  actions:{
    saveAnswer(){
      var params = {
        user: this.get('user'),
        content: this.get('content'),
        question: this.get('question')
      }
      this.set('user',"");
      this.set('content',"");
      this.set("newAnswerForm",false);
      this.sendAction("saveAnswer",params);
    },

    showAnswerForm(){
      this.set("newAnswerForm",true);
    },
    hideAnswerForm(){
      this.set('user',"");
      this.set('content',"");
      this.set("newAnswerForm",false);
    }
  }
});
