import DS from 'ember-data';

export default DS.Model.extend({
  asked: DS.attr(),
  user: DS.attr(),
  notes: DS.attr(),
  answers:DS.hasMany('answer',{async:true})
});
