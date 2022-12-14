

function onInit() {
    renderKeyWords()
    renderFilterByQueryStringParams()
    renderGallery()
    onInitEditor()
    
}

function renderGallery() {
    
    const images = getImages()
    console.log(images)
    let strHTML = images.map(image=>` <img onclick="onImgSelect(${image.id})" src="${image.url}">

    `)
    document.querySelector('.image-container').innerHTML=strHTML.join('')

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
    const keywordsKeys = Object.keys(gKeywordSearchCountMap)
    const strHTML = keywordsKeys.map(keyword => `<li style=font-size:${keywords.keyword}px>${keyword}</li>`)
    document.querySelector('.keyword-search').innerHTML = strHTML.join('')
}

function renderFilterByQueryStringParams() {
    const queryStringParams = new URLSearchParams(window.location.search)
    const filterBy = {
        keyword : queryStringParams.get('keyword') || '',
       
    }
    if (!filterBy.keyword) return
    document.querySelector('.search-bar input').value = filterBy.keyword
    setImageFilter(filterBy)

}