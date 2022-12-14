'use strict'


var gMeme = [{
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
    //check if from local storage
    const meme = gMeme.find(meme => memeId = meme.id)
    return meme

}

function setLineText(text,memeId){
    const meme=getMemebyId(memeId)
    meme.lines[meme.selectedLineIdx].txt=text

}

function setImg(imgId){
    
}