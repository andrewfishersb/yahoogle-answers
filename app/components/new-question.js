import Ember from 'ember';

export default Ember.Component.extend({
  newQuestionFormClicked: false,
  actions: {
    submitQuestion(){
      var params = {
        question: this.get('question')?this.get('question'):"",
        user: this.get('user')?this.get('user'):"",
        content: this.get('content')?this.get('content'):"",
      }
      this.set('question',"");
      this.set('user',"");
      this.set('content',"");
      this.sendAction("submitQuestion",params);
    }


    hideQuestionForm(){
      newQuestionFormClicked=false;
    }
    showQuestionForm(){
      newQuestionFormClicked = true;
    }
  }
});
