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
            width:0,
            align: 'center',
            strokeColor: 'white',
            fontColor: 'black',
            font: 'impact',
            pos: {x:225, y:50},
            

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
        width: 0,
        align: 'center',
        strokeColor: 'white',
        fontColor: 'black',
        font: 'impact',
        pos: {x:225, y:50},
        
    }
    if(gMeme.lines.length>0) line.pos.y=400
    if(gMeme.lines.length>1) line.pos.y=225
    gMeme.lines.push(line)
    gMeme.selectedLineIdx = gMeme.lines.length - 1
}
function createSticker(emoji) {

    const line = {
        txt: `${emoji}`,
        size: 50,
        width: 0,
        align: 'center',
        strokeColor: 'white',
        fontColor: 'black',
        font: 'impact',
        pos: {x:225, y:50},
        
    }
    if(gMeme.lines.length>0) line.pos.y=400
    if(gMeme.lines.length>1) line.pos.y=225
    gMeme.lines.push(line)
    gMeme.selectedLineIdx = gMeme.lines.length - 1
}

function setTextWidth(line,width){
    line.width=width
}

function getNextLine() {
    gMeme.lines[gMeme.selectedLineIdx].isSelected=false
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
    gMeme.lines[gMeme.selectedLineIdx].pos.x = LEFT_ALIGN
    gMeme.lines[gMeme.selectedLineIdx].align = 'start'
}
function alignCenter() {
    gMeme.lines[gMeme.selectedLineIdx].pos.x = gElCanvas.width / 2
    gMeme.lines[gMeme.selectedLineIdx].align = 'center'
}
function alignRight() {
    gMeme.lines[gMeme.selectedLineIdx].pos.x = gElCanvas.width - 10
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

// scale and drag test

function isDragable(pos){
  const clickedLinePos= getClickedLinePos(pos)
  if(clickedLinePos>=0){
    gMeme.selectedLineIdx=clickedLinePos
    return true
  }
}

function getClickedLinePos(clickedPos)
{
    const idx = gMeme.lines.findIndex((line) => {
        let offset = 0;
        const { pos, align, width, size } = line;
        if (align === 'start') offset = width / 2;
        else if (align === 'end') offset = -width / 2;

        return (
            pos.x - width / 2 + offset -10 < clickedPos.x &&
            pos.x + width / 2 + offset +10> clickedPos.x &&
            pos.y - size - 5 < clickedPos.y &&
            pos.y + 25 > clickedPos.y
        );
    });
    return idx
}

function dragSelected(pos,gStartPos){
    const dx=pos.x -gStartPos.x
    const dy =pos.y - gStartPos.y
    let idx =gMeme.selectedLineIdx
    if (idx>=0){
        gMeme.lines[idx].pos.x += dx
        gMeme.lines[idx].pos.y +=dy

        return
    }
}

function getSelectPos(){
    const idx=gMeme.selectedLineIdx
    if (idx>=0){
        const {size, width,pos,align}=gMeme.lines[idx]
        let widthOffset=-width
        if(align==='start') widthOffset=0;
        if(align==='end') widthOffset= -width*2
        const x =pos.x + (widthOffset/2) - 10
        const y= pos.y - size + 10
        const w=width+20
        const h=size+15
        return{x,y,w,h}
    }
}

