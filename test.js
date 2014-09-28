
var assert = require('assert');

var sw = require('./');

describe('stringywingy', function () {
  describe('isAnagram', function () {
    it('should give true on anagrams', function () {
      assert(sw.isAnagram('Elvis', 'Lives'));
      assert(sw.isAnagram('Clint Eastwood', 'Old west action'));
    });

    it('should give false if not anagrams', function () {
      assert(sw.isAnagram('Ben Affleck', 'Batman') === false);
    });
  });

  describe('isPalindrome', function () {
    it('should give true on palindromes', function () {
      assert(sw.isPalindrome('Tacocat'));
      assert(sw.isPalindrome('Yo, banana boy!'));
      assert(sw.isPalindrome('Agnes i senga'));

    });

    it('should give false if not palindromes', function () {
      assert(sw.isPalindrome('Woppaa') === false);
    });
  });
});
