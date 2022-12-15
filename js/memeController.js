'use strict'

function onInitEditor() {
    renderMeme()
}

function renderMeme() {
    const meme = getMeme()
    console.log(meme)
    renderCanvas(meme)

}
function onImgSelect(imgId){
    setImg(imgId)
    renderMeme()
    
}
function onMemeSelect(idx){
    memeSelect()
    
    renderMeme()
    
}

function onSetLineText(text) {
    setLineText(text)
    renderMeme()
}
function onNextLine(){
    getNextLine()
    const textInput=document.querySelector('.control-box input')
    textInput.value=getLineText()
    renderMeme()

}
function onCreateLine(){
    createLine()
    const textInput=document.querySelector('.control-box input')
    textInput.value=''
    renderMeme()
}
function onDeleteText(){
    deleteText()
    const textInput=document.querySelector('.control-box input')
    textInput.value=getLineText()
    renderMeme()
}
function onIncreaseFont(){
    increaseFont()
    renderMeme()
    
}
function onDecreaseFont(){
    decreaseFont()
    renderMeme()
}
function onAlignLeft(){
    alignLeft()
    renderMeme()
}
function onAlignCenter(){
    alignCenter()
    renderMeme()
}
function onAlignRight(){
    alignRight()
    renderMeme()
}
function onSetFont(font){
    setFont(font)
    renderMeme()
}
function onSetStrokeColor(color){
    const elimg=document.querySelector('.set-stroke-color img')
    elimg.style.borderColor=color
    setStrokeColor(color)
    renderMeme()
}
function onSetFontColor(color){
    const elimg=document.querySelector('.set-font-color img')
    elimg.style.borderColor=color
    setFontColor(color)
    renderMeme()
}

function onSave(){
    Save()
    openMemeGallery()
}

function onDownload(elLink){
    downloadCanvas(elLink)
}

function onShare(){
    shareCanvas()
}