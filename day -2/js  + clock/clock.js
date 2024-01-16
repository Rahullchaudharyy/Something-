// const secondhand = document.querySelector('.second-hand')



// function setDate(){
//     const now = new Date();
//     const second = now.getSeconds();
//     const secondDegree = ((second/60)*360);

//     secondhand.computedStyleMap.transform = `rotate ${secondDegree}deg`
    
// }

// setInterval(setDate, 1000); /* I HAVE to srach about it */

document.addEventListener('DOMContentLoaded', (event)=>{
const secondhand = document.querySelector('.second-hand');
const minutehand = document.querySelector('.minute-hand');
const hourhand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    const second = now.getSeconds();
    const secondDegree = ((second / 60) * 360)+ 90;
    secondhand.style.transform = `rotate(${secondDegree}deg)`;

    const minutes = now.getMinutes();
    const minutedegree = ((minutes/60)*360 )+ 90;
    minutehand.style.transform = `rotate(${minutedegree}deg)`;

    const hours = now.getHours();
    const houresdegree = ((hours/60)*360) + 90;
    hourhand.style.transform = `rotate(${houresdegree}deg)`;


}

setInterval(setDate, 1000);
});