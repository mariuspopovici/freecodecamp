/**
 * Fill in the object constructor with the following methods below:
 * getFirstName()
 * getLastName()
 * getFullName()
 * setFirstName(first)
 * setLastName(last)
 * setFullName(firstAndLast)
 *
 * Run the tests to see the expected output for each method. The methods that take an argument
 * must accept only one argument and it has to be a string. These methods must be the only
 * available means of interacting with the object.
 *
 * @param {String} firstAndLast
 */
var Person = function(firstAndLast) {
  // make full name a local variable not a property
  let fullName = firstAndLast;
  // maintain only full name and calculate first and last from full name

  this.getFullName = function() {
    return fullName;
  };

  this.setFullName = function(value) {
    fullName = value;
  };

  this.getFirstName = function() {
    let [firstName] = fullName.split(/\s/);
    return firstName;
  };

  this.getLastName = function() {
    let [, lastName] = fullName.split(/\s/);
    return lastName;
  };

  this.setFirstName = function(value) {
    let [firstName, lastName] = fullName.split(/\s/);
    firstName = value;
    fullName = firstName + ' ' + lastName;
  };

  this.setLastName = function(value) {
    let [firstName, lastName] = fullName.split(/\s/);
    lastName = value;
    fullName = firstName + ' ' + lastName;
  };
};

export { Person };
