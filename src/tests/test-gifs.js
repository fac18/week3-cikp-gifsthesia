
let test = require('tape');
//let separateSnippet = require('../scripts/script-gifs');

const separateSnippet = (x) => {
  let snippedSnippet = snippet.replace(/'/g, "");
  words = snippedSnippet.split(" ");
  return words;
}

let snippet = "and I think it's gonna be a long long time";

test('Spilt a string into an array of its words', function(t) {
    var actual = separateSnippet(snippet);
    var expected = ["and", "I", "think", "its", "gonna", "be", "a", "long", "long", "time"];
  t.deepEqual(actual, expected, "Should be an array of string words");
  t.end();
});

test('Remove an apostrophe from a word', function(t) {
    var actual = separateSnippet(snippet);
    var expected = ["and", "I", "think", "its", "gonna", "be", "a", "long", "long", "time"];
  t.deepEqual(actual, expected, "Should be no apostrophes");
  t.end();
});