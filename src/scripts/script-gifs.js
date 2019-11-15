let gifKey = config.GIFS_KEY; // fetch key from config file

// Wrapper function to allow all the below to run from one call.
function gifGetter() {

    // Takes lyrics snippet from the musicmatch API call on script-lyrics.js file
    let snippet = trackInfo.lyrics;
    let words = [];

    // Create an array of each word and remove apostrophes
    const separateSnippet = (x) => {
        let snippedSnippet = snippet.replace(/'/g, "");
        words = snippedSnippet.split(" ");
        return words;
    }

    separateSnippet(snippet);

    // This function runs a GIPHY API call for each word in the words array, then appends the relevant GIF image to the page via the DOM
    const gifStack = (w) => {
        for (let i=0; i<words.length; i++) {
            let snippetWord = words[i];
            gifCall(snippetWord);

            function gifCall() {
                let xhr = new XMLHttpRequest();
                let url = "https://api.giphy.com/v1/gifs/search?q=" + snippetWord + gifKey + "&limit=1";
        
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        let giphyObj = JSON.parse(xhr.responseText);
                        let newGif = document.createElement("img");
                        let gifContainer = document.querySelector(".gif-container");
                        gifContainer.appendChild(newGif);
                        let link = giphyObj.data[0].images.fixed_height.url;
                        newGif.src = link;
                    }
                }
            xhr.open("GET", url, true)
            xhr.send();
            };
        };
    }
gifStack(words);
};



