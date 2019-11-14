"use strict";

const trackInfo = {
    id: 0,
    artist: "",
    track: "",
    lyrics: ""
}

function arrayPickRandom(arr) {
    let arrIndex = Math.floor(Math.random()*arr.length);
    return arrIndex;
}

// use a callback to prevent getRandomTrackLyrics() running until getRandomTrackInfo() completes
function getRandomTrackInfo(callback) {
    const xhr = new XMLHttpRequest();
    // the url contains a proxy (https://cors-anywhere.herokuapp.com/) to get around the CORS problem
    // const url = "https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?apikey=a515bb508047c4dbf594264ecfde2094&chart_name=top&page=1&page_size=50&country=uk&f_has_lyrics=1"
    const url = "https://api.musixmatch.com/ws/1.1/chart.tracks.get?apikey=a515bb508047c4dbf594264ecfde2094&chart_name=top&page=1&page_size=50&country=uk&f_has_lyrics=1"
    xhr.onreadystatechange = function() {
        // console.log("getRandomTrackInfo onreadystatechange");
        if (xhr.readyState === 4 && xhr.status === 200) {
            // console.log("getRandomTrackInfo function status 200");
            const response = JSON.parse(xhr.responseText);
            const trackList = response.message.body.track_list;
            const randomIndex = (arrayPickRandom(trackList));
            trackInfo.id = trackList[randomIndex].track.track_id;
            trackInfo.artist = trackList[randomIndex].track.artist_name;
            trackInfo.track = trackList[randomIndex].track.track_name;
            // console.log(trackInfo);
            callback();
        }
    }
    xhr.open("GET", url, true);
    xhr.send();
};

function getRandomTrackLyrics() {
    const xhr = new XMLHttpRequest();
    // let url = "https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.snippet.get?apikey=a515bb508047c4dbf594264ecfde2094&track_id=" + randomId;
    let url = "https://api.musixmatch.com/ws/1.1/track.snippet.get?apikey=a515bb508047c4dbf594264ecfde2094&track_id=" + trackInfo.id;
    // console.log("getRandomTrackLyrics url = " + url);
    // console.log("getRandomTrackLyrics onreadystatechange");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // console.log("getRandomTrackLyrics function status 200");
            const response = JSON.parse(xhr.responseText);
            trackInfo.lyrics = response.message.body.snippet.snippet_body;
            // console.log(trackInfo);
            return trackInfo.lyrics;
            // return something??
        }
    }
    xhr.open("GET", url, true);
    xhr.send();
};




// module.exports = log;