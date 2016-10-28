import Ember from 'ember';

export default Ember.Component.extend({
  updateAnswerForm: false,
  actions:{
    editAnswer(){
      var params = {
        content: this.get('content')
      }
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
