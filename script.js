//your JS code here. If required.
const buttons = document.querySelectorAll(".btn");
const stopButton = document.querySelector(".stop");

let audio = null;

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        const soundName = button.textContent.trim();

        // Stop previous sound
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }

        // Create audio using the button text
        audio = new Audio(`./sounds/${soundName}.mp3`);

        audio.play();
    });
});

stopButton.addEventListener("click", function () {
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
});
