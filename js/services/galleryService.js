'use strict'
const KEYWORD_STORAGE='KeywordDB'

var gMemesGallery
var gKeywordSearchCountMap = { 'funny': 1, 'cat': 1, 'baby':1,'test':1 }
var gFilterBy = { keyword: '' }
var gImgs = [
    { id: 1, url: 'img/gallery/1.jpg', keywords: ['funny', 'cat'] },
    { id: 2, url: 'img/gallery/2.jpg', keywords: ['dog', 'cute'] },
    { id: 3, url: 'img/gallery/3.jpg', keywords: ['dog', 'cute', 'baby'] }

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
    var keywords=loadFromStorage(KEYWORD_STORAGE)
    if(!keywords) return gKeywordSearchCountMap
    gKeywordSearchCountMap=keywords
    return gKeywordSearchCountMap
}

function updateKeywordCount(keyword){
    if(gKeywordSearchCountMap[keyword]<=10) gKeywordSearchCountMap[keyword]++
    saveKeywordtoStorage(KEYWORD_STORAGE,gKeywordSearchCountMap)
}

function getMemesGallery(){
   const memes=loadFromStorage(MEME_STORAGE)
   gMemesGallery=memes
   return memes
}