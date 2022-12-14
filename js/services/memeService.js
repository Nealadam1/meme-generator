'use strict'

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] }];
var gMemes = [{
    id: 1,
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
            size: 20,
            align: 'left',
            color: 'red'
        },
    ]
}
]

function getMemebyId(memeId) {
    const meme = gMemes.find(meme => memeId = meme.id)
    return meme

}

function setLineText(text,memeId){
    const meme=getMemebyId(memeId)
    meme.lines[meme.selectedLineIdx].txt=text

}