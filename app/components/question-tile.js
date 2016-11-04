import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestions: Ember.inject.service(),
  unFavoriteBox: false,
  actions: {
    addToFavorites(question){
      this.set('unFavoriteBox',true);
      this.get('favoriteQuestions').add(question);
    },
    removeFromFavorites(question){
      this.set('unFavoriteBox',false);
      this.get('favoriteQuestions').remove(question);
    }
  }
});
