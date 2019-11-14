# Gifsthesia
Jamie, Kin, Reda &amp; Roshan's API project

---
#### To run our site properly:

- Please install this chrome extension [Moesif Origin & CORS Changer](https://chrome.google.com/webstore/detail/moesif-orign-cors-changer/digfbfaphojjndkpccljibejjbppifbc) which will help with the CORS issue and allow the API calls to be made

#### To run our tests, you’ll need to do the following:

- Clone the repo
- cd into the directory
- run npm install

This will install tape, tap-spec, nodemon and nyc as dev-dependencies, since these are listed in our package.json file.

You can then run npm test to run the tests, or npm run coverage to run nyc alongside

---

### What is GIFsthesia?

A game that involves guessing a song based on a snippet of lyrics, where each word is represented by a GIF. Snazzy!

We used the musixmatch API to:
1. request the top 50 chart tracks from the UK
..* we created a function to select a random song from this      
2. request the lyric snippet, song name and artist, when provided with a song's ID 

---

Readme requirements to-do:
- A clearly defined user journey, documented in your readme.
- more screenshots of how game should look


---

#### 404

For some impenetrable reason, our CSS file is blank when we inspect source in the github pages hosted link. Sorry! Here is how the page looks all pretty before we load the game.

![](https://i.imgur.com/Tl2s88M.png)


---
