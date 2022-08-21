let changehomescore = document.getElementById("home-score")
let changeawayscore = document.getElementById("away-score")
let counthome = 0
let countaway = 0

function homeplusone() {
    counthome += 1
    changehomescore.innerText = counthome
}

function homeplustwo() {
    counthome += 2
    changehomescore.innerText = counthome
}

function homeplusthree() {
    counthome += 3
    changehomescore.innerText = counthome
}

function awayplusone() {
    countaway += 1
    changeawayscore.innerText = countaway
}

function awayplustwo() {
    countaway += 2
    changeawayscore.innerText = countaway
}

function awayplusthree() {
    countaway += 3
    changeawayscore.innerText = countaway
}