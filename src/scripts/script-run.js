// button event

const newGameButton = document.querySelector(".new-game")

newGameButton.addEventListener('click', function() {
    getRandomTrackInfo(getRandomTrackLyrics);
    gifGetter();
    clearArtistHint();
    clearLyricsHint();
})

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

const lyricsHintButton = document.querySelector(".hint-lyrics");
let lyricsName = document.createElement('h3');

lyricsHintButton.addEventListener('click', function() {
    console.log(trackInfo.lyrics);
    let lyricsHint = lyricsHintButton.appendChild(lyricsName);
    lyricsHint.textContent = "Lyrics: " + trackInfo.lyrics;
})

const clearLyricsHint = function() {
    console.log("inside clear artist function")
    console.log("this is the artist name", lyricsName);
    console.log(lyricsHintButton.contains(lyricsName));
    if (lyricsHintButton.contains(lyricsName)) {
        lyricsHintButton.removeChild(lyricsName)
    console.log("Artist hint cleared");
}
}