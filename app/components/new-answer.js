import Ember from 'ember';

export default Ember.Component.extend({
  newAnswerForm: false,
  actions:{
    saveAnswer(){
      if(!this.get('content')){
        alert("Please Provide an Answer");
      }else{
        var params = {
          user: this.get('user') ? this.get('user'):"anonymous",
          content: this.get('content'),
          question: this.get('question'),
          vote: 0,
          time: moment().unix()*1000
        };
        this.set('user',"");
        this.set('content',"");
        this.set("newAnswerForm",false);
        this.sendAction("saveAnswer",params);
      }
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
