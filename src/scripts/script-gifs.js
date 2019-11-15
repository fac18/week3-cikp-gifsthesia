

function gifGetter() {

let snippet = trackInfo.lyrics;
let words = [];

const separateSnippet = (x) => {
    let snippedSnippet = snippet.replace(/'/g, "");
    words = snippedSnippet.split(" ");
    console.log('this is before the loop', words);
    return words;
}

separateSnippet(snippet);

const gifStack = (w) => {
    console.log('this is immediately before the loop', w);
    let obj = {};
    let fakeObj = {
        0: "jamie",
        1: "carter"
    };
    for (let i=0; i<words.length; i++) {
        let id = words.indexOf(words[i]);
        let snippetWord = words[i];


(function(){
    let xhr = new XMLHttpRequest();
    let url = "http://api.giphy.com/v1/gifs/search?q=" + snippetWord + "&api_key=dc6zaTOxFJmzC&limit=2";
    console.log('this is snippetword', snippetWord);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let giphyObj = JSON.parse(xhr.responseText);
            //console.log(giphyObj);
            //let newGif = document.createElement("img");
            //let gifContainer = document.querySelector(".gif-container");
            //gifContainer.appendChild(newGif);
            fakeObj["3"] = "rules";
            obj[id] = giphyObj.data[0].images.downsized_medium.url;
            //let link = giphyObj.data[0].images.downsized_medium.url;
            //return obj;

            //newGif.src = link;
            // wait(1000);
        }
        
    }
    xhr.open("GET", url, true)
    xhr.send();
})();
};
console.log("This is the obj", obj);
console.log("The url object's length", obj.length);
console.log("The type of the urls object", typeof(obj));

console.log("here is a hardcoded obj", fakeObj);
console.log("does fakeobj have property 1", fakeObj.hasOwnProperty(1));
console.log("does fakeobj have property 3", fakeObj.hasOwnProperty("3"));
console.log("print fakeobj object values", Object.values(fakeObj));
//console.log("This is the new array of urls", urlsArray);
}
gifStack(words);
};

// function wait(ms) {
//     let start = new Date().getTime();
//     let end = start;
//     while(end < start + ms) {
//         end = new Date().getTime();
//     }
// }

// const wait = () => {
//     setTimeout(logger, 1000);
//     }

// const logger = () => {
//     console.log("wait for it...");
// }












//module.exports = separateSnippet;