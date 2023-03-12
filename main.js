const form = document.querySelector('#video-form');
const videoDiv = document.querySelector('#video-player');
const videoScreen = document.querySelector('#video-screen');

const queryParams = Object.fromEntries(new URLSearchParams(window.location.search));
const videoURI = 'http://localhost:8080/api/v1/video/data/2'
const options = {
    mode: "cors",
    method: "GET"
  }; //teknisk set ligemeget, synes bare det så sejt ud.

videoScreen.src = 'http://localhost:8080/api/v1/video/data/2' //Alt hvad der var brug for 😎