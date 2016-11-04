import Ember from 'ember';

export default Ember.Component.extend({
  newQuestionFormClicked: false,
  actions: {
    submitQuestion(){
      if(!this.get('title')){
        alert("Please Enter a Question");
      }else{
        var params = {
          title: this.get('title') ? this.get('title'):"",
          user: this.get('user') ? this.get('user'):"anonymous",
          notes: this.get('notes') ? this.get('notes'):"",
          time: moment().unix()*1000
        };

        this.set('title',"");
        this.set('user',"");
        this.set('notes',"");
        this.set("newQuestionFormClicked",false);
        this.sendAction("submitQuestion",params);
      }

    },


    hideQuestionForm(){
      this.set('title',"");
      this.set('user',"");
      this.set('notes',"");
      this.set("newQuestionFormClicked",false);
    },
    showQuestionForm(){
      this.set("newQuestionFormClicked", true);
    }
  }
});
