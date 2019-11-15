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
        for (let i=0; i<words.length; i++) {
            let snippetWord = words[i];
            gifCall(snippetWord);

            function gifCall() {
                let xhr = new XMLHttpRequest();
                let url = "https://api.giphy.com/v1/gifs/search?q=" + snippetWord + "&api_key=dc6zaTOxFJmzC&limit=1";
        
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



