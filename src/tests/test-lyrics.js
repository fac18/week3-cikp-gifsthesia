'use strict';

const test = require('tape');
const log = require('../scripts/script-lyrics');
// const getTrackList = require('../scripts/script-lyrics');



test('Check that returned item from Musixmatch API is a string', function(t) {
    var actual = log();
    var expected = "testytest";
  t.deepEqual(actual, expected, "Musixmatch API should return a string");
  t.end();
});

// test('Check that returned item from Musixmatch API is a string', function(t) {
//     var actual = getTrackList();
//     var expected = typeof getTrackList() === 'string';
//   t.deepEqual(actual, expected, "Musixmatch API should return a string");
//   t.end();
// });