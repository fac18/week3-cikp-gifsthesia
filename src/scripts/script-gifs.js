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

(function(){
    let xhr = new XMLHttpRequest();
    let url = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC";
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let giphyObj = JSON.parse(xhr.responseText);
            console.log(giphyObj);
            let newGif = document.createElement("img");
            let gifContainer = document.querySelector(".gif-container");
            gifContainer.appendChild(newGif);
            let link = giphyObj.data[1].images.downsized_medium.url;
            newGif.src =link;  
        }
    }
    xhr.open("GET", url, true)
    xhr.send();
})()








module.exports = separateSnippet;