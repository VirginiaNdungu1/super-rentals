import Ember from 'ember';

export default Ember.Component.extend({
  update(rental, params) {
    this.sendAction('update', rental, params);
  },
  delete(rental) {
    if (confirm('Are you sure you want to delete this rental?')) {
      this.sendAction('destroyRental', rental);
    }
  }

});
