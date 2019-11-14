// button event

const newGameButton = document.querySelector(".new-game")

newGameButton.addEventListener('click', function() {
    getRandomTrackInfo(getRandomTrackLyrics);
    gifGetter();
    clearArtistHint();
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