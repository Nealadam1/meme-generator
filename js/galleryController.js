


function onInit() {

    renderKeyWords()
    renderFilterByQueryStringParams()
    renderGallery()
    onInitEditor()

}

function renderGallery() {

    const images = getImages()
    console.log(images)
    let strHTML = images.map(image => ` <img onclick="onImgSelect(${image.id})" src="${image.url}">

    `)
    document.querySelector('.image-container').innerHTML = strHTML.join('')

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
}

function renderMemeGallery() {
    var memes = getMemesGallery()
    console.log(memes)
    strHTML = memes.map((meme,idx) => ` <img onclick="onMemeSelect(${idx})" src="${meme.memeUrl}">
    
        `)
    document.querySelector('.image-container').innerHTML = strHTML.join('')


}