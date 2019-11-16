
//let gifKey = config.GIFS_KEY; // fetch key from config file

// Wrapper function to allow all the below to run from one call.

function gifGetter() {

    // Takes lyrics snippet from the musicmatch API call on script-lyrics.js file
    let snippet = trackInfo.lyrics;
    let words = [];
    let urlObj = {};

    // Create an array of each word and remove apostrophes
    const separateSnippet = (x) => {
        let snippedSnippet = snippet.replace(/'/g, "");
        words = snippedSnippet.split(" ");
        console.log(words);
        return words;
    }

    separateSnippet(snippet);

    // This function runs a GIPHY API call for each word in the words array, then appends the relevant GIF image to the page via the DOM
    const gifStack = (w) => {
        for (let i=0; i<words.length; i++) {
            let snippetWord = words[i];
            let id = words.indexOf(words[i]);
            gifCall(snippetWord);

            function gifCall() {
                let xhr = new XMLHttpRequest();
                let url = "https://api.giphy.com/v1/gifs/search?q=" + snippetWord + "&api_key=dc6zaTOxFJmzC&limit=1";
        
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        let giphyObj = JSON.parse(xhr.responseText);
                        urlObj[id] = giphyObj.data[0].images.downsized_medium.url;
                        
                    }
                }
            xhr.open("GET", url, true)
            xhr.send();
            };
        };
        setTimeout(function appendImages() {
            console.log(urlObj);
            console.log(Object.values(urlObj));
            let urlArray = Object.values(urlObj);
            for (let j=0; j<urlArray.length; j++) {
                let newGif = document.createElement("img");
                newGif.alt = "A GIF image relating to a popular song";
                let gifContainer = document.querySelector(".gif-container");
                gifContainer.appendChild(newGif);
                let link = urlArray[j];
                newGif.src = link;
            }
        
        }, 1000);
    }
gifStack(words);
};



