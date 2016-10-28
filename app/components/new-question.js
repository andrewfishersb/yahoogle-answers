import Ember from 'ember';

export default Ember.Component.extend({
  newQuestionFormClicked: false,
  actions: {
    submitQuestion(){
      var params = {
        title: this.get('title') ? this.get('title'):"",
        user: this.get('user') ? this.get('user'):"",
        notes: this.get('notes') ? this.get('notes'):"",
      };
      this.set('title',"");
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
