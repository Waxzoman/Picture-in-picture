const videoElement = document.getElementById('video');
const button = document.getElementById('button');
const screenPicker = document.getElementById('screenPicker');

//Prompt to select a media stream, pass to video element, then play

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (e) {
        console.log('Error here:', e);
    }
};

button.addEventListener('click', async () => {
    //disable button
    button.disabled = true;
    //start picture in picture
    await videoElement.requestPictureInPicture();
    // reset button
    button.disabled = false;
});

//Pick a screen button
screenPicker.addEventListener('click', selectMediaStream);


