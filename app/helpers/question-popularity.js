import Ember from 'ember';

export function questionPopularity(params) {
  var question = params[0];
    console.log(question.get('answers.content').get('length'));
  if(question.get('answers.content').get('length')>2){
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>');
  }

}

export default Ember.Helper.helper(questionPopularity);
