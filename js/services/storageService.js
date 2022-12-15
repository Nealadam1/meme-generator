'use strict'

function saveToStorage(key, val) {
    val=[val]
    localStorage.setItem(key, JSON.stringify(val))
}

function loadFromStorage(key) {
    var val = localStorage.getItem(key)
    return JSON.parse(val)
}
function pushToStorage(key, val) {
    var array = JSON.parse(localStorage.getItem(key));
    array.push(val);
    localStorage.setItem(key, JSON.stringify(array));
}