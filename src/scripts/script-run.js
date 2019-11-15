// button event

const gifContainer = document.querySelector(".gif-container");
const newGameButton = document.querySelector(".new-game");

newGameButton.addEventListener('click', function() {

while (gifContainer.firstChild) {
        gifContainer.removeChild(gifContainer.firstChild);
    }
    clearArtistTrackHint();
    clearArtistHint();
    clearLyricsHint();
    // getRandomTrackInfo(function() {
    //     getRandomTrackLyrics(gifGetter);
    getRandomTrackInfo(getRandomTrackLyrics);
})


//artist hint

const artistHintButton = document.querySelector(".hint-artist");
let artistName = document.createElement('h3');

artistHintButton.addEventListener('click', function() {
    console.log(trackInfo.artist);
    let artistHint = artistHintButton.appendChild(artistName);
    artistHint.textContent = "Artist: " + trackInfo.artist;
})

const clearArtistHint = function() {
    console.log("inside clear artist function")
    console.log("this is the artist name", artistName);
    console.log(artistHintButton.contains(artistName));
    if (artistHintButton.contains(artistName)) {
    artistHintButton.removeChild(artistName)
    console.log("Artist hint cleared");
}
}

//lyrics hint 

const lyricsHintButton = document.querySelector(".hint-lyrics");
let lyricsName = document.createElement('h3');

lyricsHintButton.addEventListener('click', function() {
    console.log(trackInfo.lyrics);
    let lyricsHint = lyricsHintButton.appendChild(lyricsName);
    lyricsHint.textContent = "Lyrics: " + trackInfo.lyrics;
});

const clearLyricsHint = function() {
    console.log("inside clear artist function")
    console.log("this is the artist name", lyricsName);
    console.log(lyricsHintButton.contains(lyricsName));
    if (lyricsHintButton.contains(lyricsName)) {
        lyricsHintButton.removeChild(lyricsName);
    console.log("Artist hint cleared");
}
}

// reveal-song

const artistTrackHintButton = document.querySelector(".reveal-song");
let artistTrackName = document.createElement('h3');

artistTrackHintButton.addEventListener('click', function() {
    console.log(trackInfo.artist);
    let artistTrackHint = artistTrackHintButton.appendChild(artistTrackName);
    artistTrackHint.textContent = "Song: " + trackInfo.artist + "- " + trackInfo.track;
})

const clearArtistTrackHint = function() {
    console.log("inside clear artistTrack function")
    console.log("this is the artist and track names", artistTrackName);
    console.log(artistHintButton.contains(artistTrackName));
    if (artistTrackHintButton.contains(artistTrackName)) {
        artistTrackHintButton.removeChild(artistTrackName)
    console.log("Artist and track hint cleared");
}
}

