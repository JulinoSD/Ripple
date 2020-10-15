function createRipple(event) {
    //
    const button = event.currentTarget
    //Next, we’ll instantiate our span element, and calculate its diameter and 
    //radius based on the width and height of the button.
    const circle = document.createElement('span')
    const diameter = Math.max(button.clientWidth, button.clientHeight)
    const radius = diameter / 2

    //the left, top, width and height

    circle.style.width = circle.style.height = `${diameter}px`
    circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`
    circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`
    circle.classList.add('ripple')

    const ripple = button.getElementsByClassName('ripple')[0]

    if (ripple) {
        ripple.remove()
    }

    //magnetic track to ripple and move button also
    // const offsetLeft = this.left + this.x * this.magneticPullX
    // const offsetTop = this.top + this.y * this.magneticPullY

    button.appendChild(circle)
}


const buttons = document.getElementsByClassName("static")
for (const button of buttons) {
    button.addEventListener("click", createRipple)
}
