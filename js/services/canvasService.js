
var gElCanvas
var gCtx
var gIsDrag = false
var gStartPos
const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend'];

function renderCanvas() {
    
    
    const { selectedImgId, lines } = getMeme()
    drawImg(selectedImgId, lines)


}
function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
}


function drawImg(imgId, lines) {
    const elImg = new Image() // Create a new html img element
    elImg.src = `img/gallery/${imgId}.jpg` // Send a network req to get that image, define the img src
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        console.log(lines)
        lines.forEach(line => drawText(line, line.pos.x, line.pos.y))
         if(gSaveClean) return gSaveClean=false
         renderSelect()
    }
}

function renderSelect() {
    const selectPos = getSelectPos()
    if (!selectPos) return
    const { x, y, w, h } = selectPos
    gCtx.beginPath();
    gCtx.roundRect(x, y, w, h, 20)
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'white'
    gCtx.stroke()

}
function drawText(line, x, y) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = `${line.strokeColor}`
    gCtx.fillStyle = `${line.fontColor}`
    gCtx.font = `${line.size}px ${line.font}`
    gCtx.textAlign = `${line.align}`
    gCtx.textBaseline = 'middle'

    gCtx.fillText(line.txt, x, y) // Draws (fills) a given text at the given (x, y) position.
    gCtx.strokeText(line.txt, x, y) // Draws (strokes) a given text at the given (x, y) position.
    setTextWidth(line, gCtx.measureText(line.txt).width)
}

function downloadCanvas(elLink) {
    const imgContent = gElCanvas.toDataURL('image/jpeg') // image/jpeg the default format
    console.log(imgContent)
    elLink.href = imgContent
}
function shareCanvas() {
    const imgDataUrl = gElCanvas.toDataURL('image/jpeg')
    function onSuccess(uploadedImgUrl) {
        // Encode the instance of certain characters in the url
        const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}`)
    }
    // Send the image to the server
    doUploadImg(imgDataUrl, onSuccess)

}

function addListeners() {
    addMouseListeners()
    addTouchListeners()
}

function addMouseListeners() {
    gElCanvas.addEventListener('mousemove', onMove)

    gElCanvas.addEventListener('mousedown', onDown)

    gElCanvas.addEventListener('mouseup', onUp)

    gElCanvas.addEventListener('mouseout',onLeaveCanvas)
}

function addTouchListeners() {
    gElCanvas.addEventListener('touchmove', onMove)

    gElCanvas.addEventListener('touchstart', onDown)

    gElCanvas.addEventListener('touchend', onUpTouch)

}

function onDown(ev) {
    const pos = getEvPos(ev)
    gIsDrag = isDragable(pos)
    console.log(gIsDrag)
    renderCanvas()
    updateTextInput()
    gStartPos = pos
    document.body.style.cursor = 'grabbing'
}

function onMove(ev) {
    const pos = getEvPos(ev)
    if (gIsDrag) {
        dragSelected(pos, gStartPos)
        gStartPos = pos
        renderCanvas()
        return
    }
    
}

function onUp() {
    gIsDrag = false;
    document.body.style.cursor = 'grab'
   
}

function getEvPos(ev) {
    var pos = {
        x: ev.offsetX,
        y: ev.offsetY,
    };
    if (TOUCH_EVS.includes(ev.type)) {
        ev.preventDefault()
        ev = ev.changedTouches[0]
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
        }
    }
    return pos;
}
function onLeaveCanvas(){
    document.body.style.cursor = 'default'
    setTimeout(() => {
        gSaveClean=true
       renderMeme() 
    }, 2000);

}

function onUpTouch(){
    gIsDrag = false;
    setTimeout(() => {
        gSaveClean=true
       renderMeme() 
    }, 2000);
    
}