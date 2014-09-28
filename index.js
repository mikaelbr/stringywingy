// Implementations go here
module.exports.isAnagram = function (first, second) {
  return sortedString(first) === sortedString(second);
};

module.exports.isPalindrome = function (str) {
  return clean(str) === reverse(clean(str));
};

// Private functions

function sortedString (str) {
  return clean(str).split('').sort().join('');
}

function clean (str) {
  if (!str) return str;
  return str.replace(/[^a-zøæå]/ig, '').toLowerCase();
}

function chars (str) {
  if (!str) return [];
  return String(str).split('');
}

function reverse (str) {
  return chars(str).reverse().join('');
}
