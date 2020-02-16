const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
let position = 'right';
let interval = null;
let intervalX = 5;
let intervalY = 5;

const drawBox = (positionX, positionY) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(positionX, positionY, 10, 10);
}

interval = setInterval(() => {
    if(position === 'right' && intervalX < canvas.width - 20){
        intervalX += 1;
    } else {
        position = 'bottom'
    }
    if(position === 'bottom' && intervalY < canvas.height - 20){
        intervalY += 1;
    } else {
        position = 'left'
    }
    // if(position === 'left' && intervalX > 20){
    //     intervalX -= 1;
    // } else {
    //     position = 'top'
    // }
    // if(position === 'top' && intervalY > 20){
    //     intervalY -= 1;
    // } else {
    //     position = 'right'
    // }
    drawBox(intervalX, intervalY);
}, 10)

console.log(canvas.width);