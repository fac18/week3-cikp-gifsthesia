// button event - runs the API call functions from script-gifs and script-lyrics.

const gifContainer = document.querySelector(".gif-container");
const newGameButton = document.querySelector(".new-game");

newGameButton.addEventListener('click', function() {

while (gifContainer.firstChild) {
        gifContainer.removeChild(gifContainer.firstChild);
    }
    showButton()
    clearArtistTrackHint();
    clearArtistHint();
    clearLyricsHint();
    getRandomTrackInfo(getRandomTrackLyrics);
})


//artist hint

const artistHintButton = document.querySelector(".hint-artist");
let artistName = document.createElement('h3');

artistHintButton.addEventListener('click', function() {
    let artistHint = artistHintButton.appendChild(artistName);
    artistHint.textContent = "Artist: " + trackInfo.artist;
})

const clearArtistHint = function() {
    if (artistHintButton.contains(artistName)) {
    artistHintButton.removeChild(artistName)
}
}

//lyrics hint 

const lyricsHintButton = document.querySelector(".hint-lyrics");
let lyricsName = document.createElement('h3');

lyricsHintButton.addEventListener('click', function() {
    let lyricsHint = lyricsHintButton.appendChild(lyricsName);
    lyricsHint.textContent = "Lyrics: " + '"'+trackInfo.lyrics +'"';
});

const clearLyricsHint = function() {
    if (lyricsHintButton.contains(lyricsName)) {
        lyricsHintButton.removeChild(lyricsName);
}
}

// reveal-song

const artistTrackHintButton = document.querySelector(".reveal-song");
let artistTrackName = document.createElement('h3');

artistTrackHintButton.addEventListener('click', function() {
    let artistTrackHint = artistTrackHintButton.appendChild(artistTrackName);
    artistTrackHint.textContent = "Song: " + trackInfo.artist + " - " + trackInfo.track + " - " + '"'+trackInfo.lyrics +'"';
})

const clearArtistTrackHint = function() {
    if (artistTrackHintButton.contains(artistTrackName)) {
        artistTrackHintButton.removeChild(artistTrackName)
}
}

//Hide buttons

let hidden = false;
    function hideButtons() {
        hidden = !hidden;
        document.querySelector('.hint-artist').style.visibility = 'hidden';
        document.querySelector('.hint-lyrics').style.visibility = 'hidden';
        document.querySelector('.reveal-song').style.visibility = 'hidden';

    };

    hideButtons();

    function showButton() {
        document.querySelector('.hint-artist').style.visibility = 'visible';
        document.querySelector('.hint-lyrics').style.visibility = 'visible';
        document.querySelector('.reveal-song').style.visibility = 'visible';
    };
    


    
   