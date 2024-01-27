const pressed = [];
const thecode = 'rahul';




window.addEventListener('keyup', function (e) {
    console.log(e.key)
    pressed.push(e.key)
    console.log(pressed);
    pressed.splice(-thecode.length - 1, pressed.length - thecode.length)
    if (pressed.join('').includes(thecode)) {
        console.log("Yeah you got the password")
        this.document.querySelector('.thepswd').textContent = 'You got the password that is "rahul"'

    }
})