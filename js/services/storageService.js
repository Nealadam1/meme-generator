'use strict'

function saveMemetoStorage(key, val) {
    val=[val]
    localStorage.setItem(key, JSON.stringify(val))
}

function saveKeywordtoStorage(key, val) {
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