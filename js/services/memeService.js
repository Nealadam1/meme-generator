'use strict'
const FONT_MAX_LIMIT = 60 // convert to em for mobile maybe
const FONT_MIN_LIMIT = 10
const LEFT_ALIGN = 10
const MEME_STORAGE = 'MemesDB'



var gMeme = {

    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
            size: 30,
            align: 'center',
            strokeColor: 'white',
            fontColor: 'black',
            font: 'impact',
            posX: 200,
            posY: 200

        },
    ]
}


function getMeme() {
    return gMeme

}

function setLineText(text) {
    if (!gMeme.lines.length) createLine()
    gMeme.lines[gMeme.selectedLineIdx].txt = text
}

function setImg(imgId) {
    gMeme.selectedImgId = imgId
}
function createLine() {

    const line = {
        txt: '',
        size: 30,
        align: 'center',
        strokeColor: 'white',
        fontColor: 'black',
        font: 'impact',
        posX: 200,
        posY: 200
    }
    gMeme.lines.push(line)
    gMeme.selectedLineIdx = gMeme.lines.length - 1
}
function getNextLine() {

    gMeme.selectedLineIdx++
    if (gMeme.selectedLineIdx >= gMeme.lines.length) gMeme.selectedLineIdx = 0
}
function getLineText() {
    return (!gMeme.lines.length) ? '' : gMeme.lines[gMeme.selectedLineIdx].txt
}

function deleteText() {
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
    gMeme.selectedLineIdx = 0
}
function increaseFont() {
    if (gMeme.lines[gMeme.selectedLineIdx].size >= FONT_MAX_LIMIT) return
    gMeme.lines[gMeme.selectedLineIdx].size++
}
function decreaseFont() {
    if (gMeme.lines[gMeme.selectedLineIdx].size <= FONT_MIN_LIMIT) return
    gMeme.lines[gMeme.selectedLineIdx].size--
}


function alignLeft() {
    gMeme.lines[gMeme.selectedLineIdx].posX = LEFT_ALIGN
    gMeme.lines[gMeme.selectedLineIdx].align = 'start'
}
function alignCenter() {
    gMeme.lines[gMeme.selectedLineIdx].posX = gElCanvas.width / 2
    gMeme.lines[gMeme.selectedLineIdx].align = 'center'
}
function alignRight() {
    gMeme.lines[gMeme.selectedLineIdx].posX = gElCanvas.width - 10
    gMeme.lines[gMeme.selectedLineIdx].align = 'end'
}

function setFont(font) {
    gMeme.lines[gMeme.selectedLineIdx].font = font
}
function setStrokeColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].strokeColor = color
}
function setFontColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].fontColor = color
}
function Save() {
    gMeme['memeUrl'] = gElCanvas.toDataURL('image/jpeg')
    const isEmpty = loadFromStorage(MEME_STORAGE)
    if (!isEmpty) {
        saveToStorage(MEME_STORAGE, gMeme)
    } else {
        pushToStorage(MEME_STORAGE, gMeme)
    }

}

function memeSelect(idx) {
    gMeme = gMemesGallery[idx]
}