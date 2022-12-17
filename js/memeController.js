'use strict'

var gSaveClean

function onInitEditor() {
    gElCanvas=document.getElementById('meme-canvas')
    gCtx=gElCanvas.getContext('2d')
    addListeners()
    renderMeme()
}

function renderMeme() {
    const meme = getMeme()
    renderCanvas(meme)
}

function onImgSelect(imgId){

    addListeners()
    setImg(imgId)
    renderMeme()
    toggleEditor()
    resizeCanvas()
    centerInitalText()
}

function onMemeSelect(idx){
    addListeners()
    memeSelect(idx)
    onNextLine()
    renderMeme()
    toggleEditor()
    resizeCanvas()  
}

function updateTextInput(){
    const textInput=document.querySelector('.control-box input')
    textInput.value=getLineText()
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

function onCreateSticker(emoji){
  
    createSticker(emoji)
    const textInput=document.querySelector('.control-box input')
    textInput.value=`${emoji}`
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
    gSaveClean=true
    renderMeme()
    const saveTimeout=setTimeout(() => {
       save()
       openMemeGallery() 
       clearTimeout(saveTimeout);
    }, 10)  
}
    
function onDownload(elLink){
    downloadCanvas(elLink)
}

function onShare(){
    shareCanvas()
}

// design handlers
function toggleMenu() {
    document.body.classList.toggle('menu-open')
}

function toggleEditor() {
    document.body.classList.toggle('editor-open')
    document.querySelector('.gallery-container').classList.add('hidden')
}

function toggleWordMenu(){
    document.body.classList.toggle('keyword-open')
}