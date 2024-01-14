// document.addEventListener('keydown', function (e) {
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     const animationt = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//     console.log(animationt);
//     if (!audio) return;
//     audio.currentTime = 0;
//     audio.play();
//     animationt.classList.add('playing');
// });

document.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const keyElement = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio || !keyElement) return;

    audio.currentTime = 0;
    audio.play();

    keyElement.classList.add('playing');
    
    // Remove the 'playing' class after the animation duration
    setTimeout(() => {
        keyElement.classList.remove('playing');
    }, ); // Adjust the timeout duration based on your transition duration
});

