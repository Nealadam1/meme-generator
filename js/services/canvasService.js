
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
    elImg.src = `img/gallery/${imgId}.jpg` // Send a network req to get that image, define the img src
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        console.log(lines)
        lines.map(line=> drawText(line,line.posX,100))  
    }
}
function drawText(line, x, y) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = `${line.strokeColor}`
    gCtx.fillStyle = `${line.fontColor}`
    gCtx.font = `${line.size}px ${line.font}`;
    gCtx.textAlign = `${line.align}`
    gCtx.textBaseline = 'middle'

    gCtx.fillText(line.txt, x, y) // Draws (fills) a given text at the given (x, y) position.
    gCtx.strokeText(line.txt, x, y) // Draws (strokes) a given text at the given (x, y) position.
}

function downloadCanvas(elLink){
    const imgContent = gElCanvas.toDataURL('image/jpeg') // image/jpeg the default format
    console.log(imgContent)
    elLink.href = imgContent
}
function shareCanvas(){
    const imgDataUrl = gElCanvas.toDataURL('image/jpeg')
    function onSuccess(uploadedImgUrl) {
        // Encode the instance of certain characters in the url
        const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}`)
    }
    // Send the image to the server
    doUploadImg(imgDataUrl, onSuccess)

}
