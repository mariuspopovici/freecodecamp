/**
 * Given an absolute path for a file (Unix-style), simplify it. Or in other words, convert it to the canonical path.
 * In a UNIX-style file system, a period . refers to the current directory. Furthermore, a double period .. moves the directory up a level.
 * For more information, see: Absolute path vs relative path in Linux/Unix Note that the returned canonical
 * path must always begin with a slash /, and there must be only a single slash / between two directory names.
 * The last directory name (if it exists) must not end with a trailing /. Also, the canonical path must be the
 * shortest string representing the absolute path.
 *
 * @param {string} path
 * @return {string}
 */
const simplifyPath = function(path) {
  let directories = [];
  path.split('/').forEach(element => {
    if (element === '..') {
      // go up a level
      directories.pop();
    } else if (element === '.' || element === '') {
      // do nothing
    } else {
      // go down a level
      directories.push(element);
    }
  });

  return '/' + directories.join('/');
};

const simplifyPathReduce = path => {
  return (
    '/' +
    path
      .split('/')
      .reduce((acc, element) => {
        if (element === '..') {
          // go up a level
          acc.pop();
        } else if (element === '.' || element === '') {
          // do nothing
        } else {
          // go down a level
          acc.push(element);
        }
        return acc;
      }, [])
      .join('/')
  );
};

console.log(simplifyPathReduce('a/b/c/../d'));

export { simplifyPath, simplifyPathReduce };
