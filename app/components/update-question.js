import Ember from 'ember';

export default Ember.Component.extend({
  newUpdateFormClicked: false,
  actions:{
    updateQuestion(updatedQuestion){
      var params = {
        title: this.get('title'),
        notes: this.get('notes'),
        time: moment().format("dddd, MMMM Do YYYY, h:mm a")
      };
      this.set("title","");
      this.set("notes","");
      this.set("newUpdateFormClicked", false);
      this.sendAction("updateQuestion", updatedQuestion, params);
    },


    hideUpdateForm(){
      this.set("title","");
      this.set("notes","");
      this.set("newUpdateFormClicked", false);
    },
    showUpdateForm(){
      this.set("newUpdateFormClicked", true);
    }

  }
});
