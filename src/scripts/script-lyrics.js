"use strict";

// let tracksObj = {};
// tracksObj.keys
// response.message.body.tracklist

function log(){
    return "testytest";
}

function getTrackList() {
    let xhr = new XMLHttpRequest();
    let url = "https://api.musixmatch.com/ws/1.1/chart.tracks.get?apikey=a515bb508047c4dbf594264ecfde2094&chart_name=top&page=1&page_size=50&country=uk&f_has_lyrics=1"
    xhr.onreadystatechange = function() {
        if (xhr.readystate === 4 && xhr.status === 200) {
            let response = JSON.parse(xhr.responseText);
            // console.log(response.message.body.track_list.track.track_name);
            return response.message.body.track_list.track.track_name;
        }
    }
    xhr.open("GET", url, true);
    xhr.send();
}

module.exports = log;