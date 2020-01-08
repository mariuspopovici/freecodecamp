/**
 * JavaScript Algorithms and Data Structures Projects: Telephone Number Validator
 * Return true if the passed string looks like a valid US phone number.
 * The user may fill out the form field any way they choose as long as it has the format of a valid US number.
 * The following are examples of valid formats for US numbers (refer to the tests below for other variants):
 *
 * @param {String} str
 */
function telephoneCheck(str) {
  const regExp = [
    /^\d{3}-\d{3}-\d{4}$/, //555-555-5555;
    /^\(\d{3}\)\d{3}-\d{4}$/, //555-555-5555;
    /^\(\d{3}\)\s\d{3}-\d{4}$/, //555-555-5555;
    /^\d{3}\s\d{3}\s\d{4}$/, //555-555-5555;
    /^\d{10}$/, //555-555-5555;
    /^1\s\d{3}\s\d{3}\s\d{4}$/, //1 555 555 5555
    /^1\s\d{3}-\d{3}-\d{4}$/, // 1 555-555-5555
    /^1\s\(\d{3}\)\s\d{3}-\d{4}$/, // 1 (555) 555-5555,
    /^1\(\d{3}\)\d{3}-\d{4}$/ // 1(555)555-5555
  ];

  return regExp.some(exp => exp.test(str));
}

export { telephoneCheck };
