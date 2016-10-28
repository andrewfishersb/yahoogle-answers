import Ember from 'ember';

export default Ember.Component.extend({
  updateAnswerForm: false,
  actions:{
    editAnswer(answer){
      var params = {
        content: this.get('content')
      }
      this.set('content','');
      this.set("updateAnswerForm", false);
      this.sendAction("editAnswer",answer, params);
    },

    hideAnswerForm(){
      this.set('content',"");
      this.set("updateAnswerForm", false);
    },
    showAnswerForm(){
      this.set("updateAnswerForm", true);
    }
  }

});
