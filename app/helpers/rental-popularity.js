import Ember from 'ember';

export function rentalPopularity(params /*, hash*/ ) {
  // return params;
  //grabbing the first item from the parameters (a rental object) and assigning it the variable name rental
  var rental = params[0];
  //Check whether the number of reviews are more than or equal to 5
  if (rental.get('reviews').get('length') >= 5) {
    //Ember.String.htmlSafe() allows Ember to escape HTML by default to protect against cross-site scripting
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>');
  }
}
export default Ember.Helper.helper(rentalPopularity);
