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

A game that involves guessing a song based on a snippet of its lyrics, where each word is represented by a GIF. Snazzy!

![](https://media.giphy.com/headers/2019-11-13-31-1573677075/unnamed.gif)

---

// NOTES
Readme requirements to-do:
- A clearly defined user journey, documented in your readme.
- more screenshots of how game should look

---

### We used the musixmatch API to:

1. request the top 50 chart tracks from the UK
..* we created a function to select a random song from this      
2. send a song's ID and request the lyric snippet, song name and artist 

---

### and the Giphy API to:

1. 
2. 

---

### The User Journey

1. Landing Page = Home page = all the pages = 1 page site!
2. Title & instructions for playing the game
3. Clicking the green 'start game' button generates the gifs
4. User tries to guess the lyrics from the displayed gifs
5. User can click on hint buttons. The first hint button reveals the artist, the second reveals the lyric snippet
6. Finally, if the user is fed up the almost impossible challenge, they can hit the reveal button to show the song name and who sang it!

7. Repeat above from point 3. *insert callbacks/ recursion joke here*

---

#### Title




---
