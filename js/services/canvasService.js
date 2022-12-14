
let gElCanvas
let gCtx

function renderCanvas(meme){
    const {selectedImgId,lines}=meme
    console.log('canvas render')
    gElCanvas=document.getElementById('meme-canvas')
    gCtx=gElCanvas.getContext('2d')
    // resizeCanvas()
    drawImg(selectedImgId,lines)
    
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    // Note: changing the canvas dimension this way clears the canvas
    gElCanvas.width = elContainer.offsetWidth - 20
    // Unless needed, better keep height fixed.
    gElCanvas.height = elContainer.offsetHeight
}


function drawImg(imgId,lines) {
    const elImg = new Image() // Create a new html img element
    elImg.src = `img/${imgId}.jpg` // Send a network req to get that image, define the img src
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        lines.map(line=> drawText(line.txt,100,100))  
    }
}
function drawText(text, x, y) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'brown'
    gCtx.fillStyle = 'black'
    gCtx.font = "40px arial";
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'

    gCtx.fillText(text, x, y) // Draws (fills) a given text at the given (x, y) position.
    gCtx.strokeText(text, x, y) // Draws (strokes) a given text at the given (x, y) position.
}