import Ember from 'ember';

export default Ember.Component.extend({
  newUpdateFormClicked: false,
  actions:{
    updateQuestion(askedQuestion){
      var params = {
        question: this.get('question'),
        user: this.get('user'),
        notes: this.get('notes')
      }
      // this.set("question","");
      // this.set("user","");
      this.set("newUpdateFormClicked", false);
      this.sendAction("updateQuestion", askedQuestion, params);
    },


    hideUpdateForm(){
      this.set("newUpdateFormClicked", false);
    },
    showUpdateForm(){
      this.set("newUpdateFormClicked", true);
    }

  }
});
