// app.js
const video = document.getElementById('video');
const button = document.getElementById('button');

button.addEventListener('click', event => {
   const videoConstraints = {
    facingMode: 'environment'
  };
  const constraints = {
    video: videoConstraints,
    audio: false
  };
  navigator.mediaDevices
    .getUserMedia(constraints)
    .then(stream => {
      video.srcObject = stream;
    })
    .catch(error => {
      console.error(error);
    });
});

navigator.mediaDevices.enumerateDevices().then(gotDevices);
