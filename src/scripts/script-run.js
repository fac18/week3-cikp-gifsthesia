// button event

const newGameButton = document.querySelector(".new-game")

newGameButton.addEventListener('click', function() {
    getRandomTrackInfo(getRandomTrackLyrics);
    gifGetter();
})