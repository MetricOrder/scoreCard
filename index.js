let homeTotal = 0
let awayTotal = 0

let homeValue = document.getElementById("homeScore")
let awayValue = document.getElementById("awayScore")

function addHome1(){
    homeTotal +=1
    homeValue.textContent = homeTotal
}
function addHome2(){
    homeTotal +=2
    homeValue.textContent = homeTotal
}
function addHome3(){
    homeTotal +=3
    homeValue.textContent = homeTotal
}
function subtractHome1(){
    homeTotal -=1
    homeValue.textContent = homeTotal
}
function subtractHome2(){
    homeTotal -=2
    homeValue.textContent = homeTotal
}
function subtractHome3(){
    homeTotal -=3
    homeValue.textContent = homeTotal
}

function addAway1(){
    awayTotal +=1
    awayValue.textContent = awayTotal
}
function addAway2(){
    awayTotal +=2
    awayValue.textContent = awayTotal
}
function addAway3(){
    awayTotal +=3
    awayValue.textContent = awayTotal
}
function subtractAway1(){
    awayTotal -=1
    awayValue.textContent = awayTotal
}
function subtractAway2(){
    awayTotal -=2
    awayValue.textContent = awayTotal
}
function subtractAway3(){
    awayTotal -=3
    awayValue.textContent = awayTotal
}

function reset(){
    homeTotal = 0
    awayTotal = 0
    awayValue.textContent = awayTotal
    homeValue.textContent = homeTotal
}