import Ember from 'ember';

export default Ember.Component.extend({
  newQuestionFormClicked: false,
  actions: {
    submitQuestion(){
      var params = {
        question: this.get('question') ? this.get('question'):"",
        user: this.get('user') ? this.get('user'):"",
        notes: this.get('notes') ? this.get('notes'):"",
      };
      this.set('question',"");
      this.set('user',"");
      this.set('notes',"");
      this.set("newQuestionFormClicked",false);
      this.sendAction("submitQuestion",params);
    },
    

    hideQuestionForm(){
      this.set("newQuestionFormClicked",false);
    },
    showQuestionForm(){
      this.set("newQuestionFormClicked", true);
    }
  }
});
