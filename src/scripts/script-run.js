// button event

const gifContainer = document.querySelector(".gif-container");
const newGameButton = document.querySelector(".new-game");

newGameButton.addEventListener('click', function() {
    while (gifContainer.firstChild) {
        gifContainer.removeChild(gifContainer.firstChild);
    }
    getRandomTrackInfo(function() {
        getRandomTrackLyrics(gifGetter);
    });
})