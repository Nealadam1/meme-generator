'use strict'
var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
var gFilterBy = { keyword: '' }
var gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] },
    { id: 2, url: 'img/2.jpg', keywords: ['dog', 'cute'] },
    { id: 3, url: 'img/3.jpg', keywords: ['dog', 'cute', 'baby'] }

]

function getImages() {
    var images = gImgs.filter(img => img.keywords.toString().includes(gFilterBy.keyword))
    return images
}

function setImageFilter(filterBy = {}) {
    if (filterBy.keyword !== undefined) gFilterBy.keyword = filterBy.keyword
    return gFilterBy
}

function getKeyWords() {
    return gKeywordSearchCountMap
}
