# stringywingy

Check if a sentence or a word is an anagram or a palindrome.

**This module is ment as an example of a NPM module for a introductory course
of Node.js**


## Install

Install by using NPM:

```
npm install --save stringywingy
```

Require the file in your file

```
var sw = require('stringywingy');
```

## Usage

### isAnagram

```js
var sw = require('stringywingy');
sw.isAnagram('Clint Eastwood', 'Old west action'); //=> true
```

### isPalindrome

```js
var sw = require('stringywingy');
sw.isPalindrome('Yo, banana boy!'); //=> true
```
