import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  content: DS.attr(),
  question: DS.belongsTo('question', {async: true}),
  vote: DS.attr(),
  time: DS.attr()
});
