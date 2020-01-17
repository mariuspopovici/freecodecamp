/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  let canonical = [];
  path.split('/').forEach(element => {
    if (element === '..') {
      canonical.pop();
    } else if (element === '.' || element === '') {
      // do nothing
    } else {
      canonical.push(element);
    }
  });

  return '/' + canonical.join('/');
};

console.log(simplifyPath('/a/./b/../../c/'));

export { simplifyPath };
