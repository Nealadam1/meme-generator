


function onInit() {

    renderKeyWords()
    renderFilterByQueryStringParams()
    renderGallery()
    onInitEditor()
    document.getElementById('gallery').classList.add('active')
    

}

function renderGallery() {

    const images = getImages()
    console.log(images)
    let strHTML = images.map(image => ` <img onclick="onImgSelect(${image.id})" src="${image.url}">

    `)
    document.querySelector('.image-container').innerHTML = strHTML.join('')
    document.getElementById('meme-gallery').classList.remove('active')
    document.querySelector('.search-bar').classList.remove('hidden')
}

function onSetFilterBy(filterBy) {
    filterBy = setImageFilter(filterBy)
    renderGallery()

    const queryStringParams = `?keyword=${filterBy.keyword}`
    const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + queryStringParams
    window.history.pushState({ path: newUrl }, '', newUrl)
}

function renderKeyWords() {

    const keywords = getKeyWords()
    const strHTML = []
    for (const [key, value] of Object.entries(keywords)) {
        strHTML.push(`<li onclick="onSelectKeyword(this.id)" id=${key} style=font-size:${value * 5}px>${key}</li>`)
    }
    document.querySelector('.keyword-search').innerHTML = strHTML.join('')
    renderDataList(keywords)
}
function renderDataList(keywords){
    keywords=Object.keys(keywords)
    const strHTML=keywords.map(key=> `<option value="${key}">` )
    document.querySelector('.search-bar datalist').innerHTML=strHTML.join('')

}

function renderFilterByQueryStringParams() {
    const queryStringParams = new URLSearchParams(window.location.search)
    const filterBy = {
        keyword: queryStringParams.get('keyword') || '',

    }
    if (!filterBy.keyword) return
    document.querySelector('.search-bar input').value = filterBy.keyword
    setImageFilter(filterBy)

}
function onSelectKeyword(clickedkeyword) {
    onSetFilterBy({ keyword: clickedkeyword })
    updateKeywordCount(clickedkeyword)
    console.log(clickedkeyword)
    console.log(gKeywordSearchCountMap)
    onInit()
}

function openMemeGallery() {
    renderMemeGallery()
    document.querySelector('.gallery-container').classList.remove('hidden')
    document.getElementById('gallery').classList.remove('active')
    document.getElementById('meme-gallery').classList.add('active')
    document.querySelector('.search-bar').classList.add('hidden')
    document.body.classList.remove('editor-open')
    document.body.classList.remove('menu-open')
}

function renderMemeGallery() {
    var memes = getMemesGallery()
    console.log(memes)
    strHTML = memes.map((meme,idx) => ` <img onclick="onMemeSelect(${idx})" src="${meme.memeUrl}">
    
        `)
    document.querySelector('.image-container').innerHTML = strHTML.join('')


}
function openGallery(){
    onInit()
    document.querySelector('.gallery-container').classList.remove('hidden')
    document.body.classList.remove('editor-open')
    document.getElementById('gallery').classList.add('active')
    document.getElementById('meme-gallery').classList.remove('active')
    document.body.classList.remove('menu-open')

}