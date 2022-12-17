'use strict'
const KEYWORD_STORAGE='KeywordDB'

var gMemesGallery
var gKeywordSearchCountMap = { 'funny': 1,'toy':1,'men':1,'suit':1,'kiss':1,'crazy':1, 'cat':1, 'dog': 1,'cute':1, 'baby':1,'president':1, }
var gFilterBy = { keyword: '' }
var gImgs = [
    { id: 1, url: 'img/gallery/1.jpg', keywords: ['president','suit'] },
    { id: 2, url: 'img/gallery/2.jpg', keywords: ['dog', 'cute','kiss'] },
    { id: 3, url: 'img/gallery/3.jpg', keywords: ['dog', 'cute', 'baby'] },
    { id: 4, url: 'img/gallery/4.jpg', keywords: ['cat', 'cute']},
    { id: 5, url: 'img/gallery/5.jpg', keywords: ['baby', 'cute'] },
    { id: 6, url: 'img/gallery/6.jpg', keywords: ['crazy', 'men','suit'] },
    { id: 7, url: 'img/gallery/7.jpg', keywords: ['baby'] },
    { id: 8, url: 'img/gallery/8.jpg', keywords: ['men', 'funny', 'crazy','suit'] },
    { id: 9, url: 'img/gallery/9.jpg', keywords: ['funny', 'baby'] },
    { id: 10, url: 'img/gallery/10.jpg', keywords: ['president', 'funny'] },
    { id: 11, url: 'img/gallery/11.jpg', keywords: ['men', 'kiss'] },
    { id: 12, url: 'img/gallery/12.jpg', keywords: ['men'] },
    { id: 13, url: 'img/gallery/13.jpg', keywords: ['men', 'suit', 'suit'] },
    { id: 14, url: 'img/gallery/14.jpg', keywords: ['suit', 'men'] },
    { id: 15, url: 'img/gallery/15.jpg', keywords: ['men'] },
    { id: 16, url: 'img/gallery/16.jpg', keywords: ['men', 'suit', 'funny'] },
    { id: 17, url: 'img/gallery/17.jpg', keywords: ['men', 'suit', 'president'] },
    { id: 18, url: 'img/gallery/18.jpg', keywords: ['toy'] }

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
    if(gKeywordSearchCountMap[keyword]<=5) gKeywordSearchCountMap[keyword]++
    saveKeywordtoStorage(KEYWORD_STORAGE,gKeywordSearchCountMap)
}

function getMemesGallery(){
   const memes=loadFromStorage(MEME_STORAGE)
   gMemesGallery=memes
   return memes
}