// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
const longestCommonPrefix = (strings = []) => {
  if (strings.length < 1 || strings.length > 200) {
    return '';
  }

  const first = strings.shift();
  let prefix = '';
  for (let i = 0; i < first.length; i++) {
    const char = first[i];
    let allMatch = true;
    for (let j = 0; j < strings.length; j++) {
      if (strings[j][i] !== char) {
        allMatch = false;
        break;
      }
    }
    if (allMatch) {
      prefix += char;
    } else {
      break;
    }
  }

  return prefix;
};

console.log(longestCommonPrefix(['cir', 'car']));
//console.log(longestCommonPrefix(['dog', 'racecar', 'car']));

export { longestCommonPrefix };
