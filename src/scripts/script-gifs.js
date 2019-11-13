'use strict';

//let snippet = "and I think it's gonna be a long long time";
let words = [];
const urls = [];

const separateSnippet = (snippet) => {
    let snippedSnippet = snippet.replace(/'/g, "");
    console.log(snippedSnippet)
    words = snippedSnippet.split(" ");
    //console.log(words);
    return words;
}




module.exports = separateSnippet;