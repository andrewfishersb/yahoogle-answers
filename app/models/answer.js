import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  content: DS.attr(),
  title: DS.belongsTo('question',{async:true})
});
