const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipbuttons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.Player__slider');

function togglePlay() {
    if (video.paused) {
        video.play();
        toggle.classList.remove('playy');
    } else {
        video.pause();
        toggle.classList.add('playy');
    }
}


function updatebutton (){
    if(this.paused){
     toggle.textContent = '►';
    }else{
        toggle.textContent = '| |';
    }
}

function skip(){
video.currentTime += parseFloat(this.dataset.skip);
}
skipbuttons.forEach(button => button.addEventListener('click',skip))

function updatethehandle(){
    video[this.name] = this.value ;
   console.log(this.value);
   console.log(this.name);

}

function handleprogress(){
    const percent = (video.currentTime/video.duration)*100
    progressBar.style.flexBasis = `${percent}%`
}

function scrub (e){
// console.log(this.value);
// progressBar.style.flexBasis =
const thetime= (e.offsetX / progress.offsetWidth)*video.duration;
video.currentTime = thetime;
}
ranges.forEach(range => range.addEventListener('change', updatethehandle))
ranges.forEach(range => range.addEventListener('mousemove', updatethehandle))
video.addEventListener('click',togglePlay)
video.addEventListener('play',updatebutton)
video.addEventListener('pause',updatebutton)
video.addEventListener('timeupdate',handleprogress)
toggle.addEventListener('click',togglePlay)
progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', scrub)

let mousedown = false;
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);