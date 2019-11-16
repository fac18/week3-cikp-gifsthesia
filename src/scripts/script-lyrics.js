let lyricsKey = config.LYRICS_KEY; // fetch key from config file

// Declare a new object to later store our random track info
const trackInfo = {
    id: 0,
    artist: "",
    track: "",
    lyrics: ""
}

// Function that takes an array, and picks a random valid index number
function arrayPickRandom(arr) {
    let arrIndex = Math.floor(Math.random()*arr.length);
    return arrIndex;
}

// Function requests the UK top 50 chart songs, and picks a random one from this list
function getRandomTrackInfo(callback) {
    const xhr = new XMLHttpRequest();
    // A workaround for the CORS problem involves appending the following link just before the url - https://cors-anywhere.herokuapp.com/
    const url = "https://api.musixmatch.com/ws/1.1/chart.tracks.get?apikey=a515bb508047c4dbf594264ecfde2094&chart_name=top&page=1&page_size=50&country=uk&f_has_lyrics=1"
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            const trackList = response.message.body.track_list;
            const randomIndex = (arrayPickRandom(trackList));
            trackInfo.id = trackList[randomIndex].track.track_id;
            trackInfo.artist = trackList[randomIndex].track.artist_name;
            trackInfo.track = trackList[randomIndex].track.track_name;
            callback();
        }
    }
    xhr.open("GET", url, true);
    xhr.send();
};

// Function requests a snippet of lyrics from the random song picked in the getRandomTrackInfo function 
function getRandomTrackLyrics() {
    const xhr = new XMLHttpRequest();
    // A workaround for the CORS problem involves appending the following link just before the url - https://cors-anywhere.herokuapp.com/
    let url = "https://api.musixmatch.com/ws/1.1/track.snippet.get?apikey=a515bb508047c4dbf594264ecfde2094&track_id=" + trackInfo.id;
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            trackInfo.lyrics = response.message.body.snippet.snippet_body;
            return gifGetter();
        }
    }
    xhr.open("GET", url, true);
    xhr.send();
};