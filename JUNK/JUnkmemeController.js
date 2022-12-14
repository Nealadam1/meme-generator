'use strict'

function onInitEditor(imageId) {
    // TODO if meme doesnt exist create new meme 
    // createMeme()
    const memeId = 1

    renderMeme(memeId)
}

function renderMeme(memeId) {
    const meme = getMemebyId(memeId)
    renderTextInput(meme.id)
    renderCrudBtns(meme.id)
    renderStyleEditor(meme.id)
    renderStickerBox(meme.id)
    renderShare(meme.id)
    console.log(meme)
    renderCanvas(meme)

}
function onSetImage(imgId){
    setImg(imgId)
    renderMeme() // just found out you dont need meme id....
    
}

function onSetLineText(text,memeId) {
    setLineText(text,memeId)
    renderMeme(memeId)
}
function renderTextInput(memeId) {
    const textInput = document.querySelector('.control-box input')
  textInput.setAttribute('data-meme-id', `${memeId}`)
}
function renderCrudBtns(memeId) {
    const crudBtns = document.querySelectorAll('.crud-btns>*')
    crudBtns.forEach(btn => btn.setAttribute('data-meme-id', `${memeId}`));
}
function renderStyleEditor(memeId) {
    const styleBtns = document.querySelectorAll('.style-editor>*')
    styleBtns.forEach(btn => btn.setAttribute('data-meme-id', `${memeId}`));
}
function renderShare(memeId) {
    const sharebtns = document.querySelectorAll('.share-container>*')
    sharebtns.forEach(btn => btn.setAttribute('data-meme-id', `${memeId}`));
}
function renderStickerBox(memeId) {
    const stickers = document.querySelectorAll('.sticker-box>*')
    stickers.forEach(sticker => sticker.setAttribute('data-meme-id', `${memeId}`));
}
