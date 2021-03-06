# Gifsthesia  

Jamie, Kin, Reda &amp; Roshan
### we are 
# TITAAAANIUMMM

---

![](https://i.imgur.com/CesUBpR.jpg)

---

#### To run our site properly:

- Please install this chrome extension [Moesif Origin & CORS Changer](https://chrome.google.com/webstore/detail/moesif-orign-cors-changer/digfbfaphojjndkpccljibejjbppifbc) which will help with the CORS issue and allow the API calls to be made

#### To run our tests, you’ll need to do the following:

- Clone the repo
- cd into the directory
- run ```npm install```

This will install tape, tap-spec, nodemon and nyc as dev-dependencies, since these are listed in our package.json file.

You can then run ```npm test``` to run the tests, or ```npm run coverage``` to run nyc alongside

---

### WTF is GIFsthesia?

A game that involves guessing a song based on a snippet of its lyrics, where each word is represented by a GIF. Snazzy!

![](https://media.giphy.com/headers/2019-11-13-31-1573677075/unnamed.gif)

---

#### Things to check before we start:

Musixmatch x Giphy 

- Are there issues with CORS requests? ✅ But we didn't know! :( 
- Is there a high enough rate limit? ✅
- Is a free API key available? ✅
- Are you able to use the API without user authentication (oAuth)? ✅
- Is good documentation available? ✅

---

#### Requirements

- APIs: Your app queries at least two APIs using the XMLHttpRequest method ✅
- Your app features some dynamic content ✅
- UX/UI : A clearly defined user journey, documented in your readme ✅
- Architecture: A well-considered architecture for your app ✅
- Code: break your JavaScript down into small functions with a clear input and output; this will make it easy to write tests
- Tests: write tests for pure functions ✅
- Design: aim for a responsive, mobile-first design ✅
- Accessibility: same as always, we'll be running your code through accessibility checkers ✅
- Take appropriate measures when it comes to concealing private information (i.e. your API key!) 

---

### The User Journey

1. Landing Page = Home page = 1 page site!
2. Title & instructions: How to play!
3. Clicking green 'start game' button shows gifs
4. User guesses lyrics from the displayed gifs
5. User can click on hint buttons. 
Hint1 reveals artist, Hint2 reveals lyric snippet
6. Finally, the user's exhausted trying to solve this impossible challenge; they hit the reveal button to reveal song, artist, and lyric snippet!
7. Repeat the above from point 3!

\* *insert callbacks/ recursion joke here* *

---

### Software Architecture

![](https://i.imgur.com/ehZt5ck.png)

![](https://i.imgur.com/yatXpg5.png)

We made a plan, and we stuck to it.
- Issues with path naming to link files, e.g. we were missing just a ```.``` which broke the link between our HTML and CSS. We downloaded the Path Autocomplete extension to help.
- Variables and functions must be exported when using ```use strict``` mode, to access them from different files

---

### We used the Musixmatch API to...

1. Request the top 50 chart tracks from the UK
* we created a function to select a random song from this

![](https://i.imgur.com/x9uPWT5.png)

2. send a song's ID and request the lyric snippet, song name and artist 

---

### ...and the Giphy API to:

![](https://i.imgur.com/3u7qpXf.png)

* after running the lyric snippet through a function to create an array of separate words and remove apostrophies
1. Loop through each word in the lyric snippet, making an API request with each iteration

* select the first result from each Giphy search, and append this to the DOM

![](https://i.imgur.com/9zkGxeX.png)

---

### Coding

- Mobbed the HTML, plus lots of pair programming!
- Tackled the 2 APIs in separate script files

![](https://i.imgur.com/Ha9fMyJ.png)

---

### TDD

- We did tests to build our functions

---

### Design

- We used a hierarchical, traffic light system for the buttons, to provide the user with implicit cues
- We used CSS Variables for colour and spacing. Long live CSS Variables! ⭐
- We went with a sort of 90s retro-psychedelic colour scheme
- We were keen to try CSS grid but our site was so simple it didn't really merit it, and so we stuck to flexbox to make our site responsive 
- Reda had a quick play on Figma with Sarah, which looks super cool
- [Figma](https://www.figma.com/file/sguxBcNJ10co9Twgqz8Au8/Untitled?node-id=1%3A2)

---

### a11y

![](https://i.imgur.com/HqSUagh.png)

---

### API Key
![](https://media.giphy.com/media/3oFyCYNrra8qo1Cv8Q/giphy.gif)

```
const config = {
    LYRICS_KEY: "apikey=a515bb508047c4dbf594264ecfde2094",
    GIFS_KEY: "&api_key=dc6zaTOxFJmzC"
  };
 ```

---

### What we learnt along the way

![](https://media.giphy.com/media/SPZFhfUJjsJO0/giphy.gif)

---

### Error message when running Giphy API

- HTTPS? SSL certificate? CORS? Running insecure content?

![](https://i.imgur.com/ocSKhEb.png)

- Added the ```s```, it works!!

![](https://i.imgur.com/zgfJrFg.jpg)

---

### Jumbled functions

- Creating and running separate API requests
- Making sure one function runs before the next

---

### Jumbled gifs

- Our gifs were coming back, alright, but they weren't displaying in the right order 😱
- It was everything we'd learnt last week in action! Except that we wanted things to be synced (one after another) rather than async
- Resolving this was a special level of hell

![](https://i.imgur.com/Fmh0E5x.png)

![](https://i.imgur.com/uM79Ncl.png)

---

### Error message when running Giphy API

- HTTPS? SSL certificate? CORS? Running insecure content?

![](https://i.imgur.com/ocSKhEb.png)

- Just added the ```s``` to the API request link, it works!!

![](https://i.imgur.com/zgfJrFg.jpg)

---

### Waterfall!!

- Chrome network tab shows us a visualisation of the API requests
    - First the list of tracks are requested
    - Secondly the lyrics are requested
    - Thirdly all of the gifs are requested at once, completing and returning at different times

![](https://i.imgur.com/Fmh0E5x.png)

![](https://i.imgur.com/uM79Ncl.png)

---

### How (not) to manipulate objects?

- Understanding objects and how they work was a huge one this week
- We really wanted to find a way to copy/map entire 'key:value' pairs into a new object, but it doesn't really work that way. If it does, please tell us how!

![](https://i.imgur.com/7Y89q7r.png)

---

### Misc things learnt

- Challenges are great, failure is good - that's how you learn! :)
- Long discussions exploring different methods for solving our problems are really fun!
- Check your file paths! An errant '/' here or a missing '.' They can make all the difference
- We had a LOT of Qs this week. Georgia and Tony are excellent (patient!) teachers 

---


