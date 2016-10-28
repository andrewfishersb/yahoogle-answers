import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.attr(),
  user: DS.attr(),
  notes: DS.attr(),
  answer:DS.attr()
});
