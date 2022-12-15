let gSelect

function createSelect(pos) {
    gSelect = {
        pos,
        size: 60,
        color: 'blue',
        isDrag: false
    }
}

function getSelect() {
    return gSelect
}

//Check if the click is inside the circle 
function isSelectClicked(clickedPos) {
    const { pos } = gSelect
    // Calc the distance between two dots
    const distance = Math.sqrt((pos.x - clickedPos.x) ** 2 + (pos.y - clickedPos.y) ** 2)
    //If its smaller then the radius of the circle we are inside
    return distance <= gSelect.size
}


function setSelectDrag(isDrag) {
    gSelect.isDrag = isDrag
}

// Move the circle in a delta, diff from the pervious pos
function moveSelect(dx, dy) {
    gSelect.pos.x += dx
    gSelect.pos.y += dy

}
