"use strict";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min) + 1);
}
const BOMB_NUMBER = 16;
let bombs = [];
let MAX_ATTEMPT;
let ATTEMPTS = 0;
/////////////////
document.getElementById('play').addEventListener('click', setLevel);
document.getElementById('play').addEventListener('click', createScore);




function setLevel(event) {
    const level = document.getElementById('difficulty').value;
    let numSquare;
    switch (level) {
        case '1':
            numSquare = 100;
            break;
        case '2':
            numSquare = 81;
            break;
        case '3':
            numSquare = 49;
            break;
    }
    ATTEMPTS = 0;
    bombs=[];
    score.innerText='';
    let cellPerSide = Math.sqrt(numSquare);
    generateBomb(numSquare);
    console.log(numSquare);
    generaGriglia(numSquare, cellPerSide);
}

function generateBomb(numSquare) {
     MAX_ATTEMPT = numSquare - BOMB_NUMBER;
    while (bombs.length < BOMB_NUMBER) {
        let bombNumber = getRandomInt(1, numSquare);
        if (!bombs.includes(bombNumber)) {
            bombs.push(bombNumber);
        }else{
        }
    }
    console.log(bombs)
}

function generaGriglia(numSquare, cellPerSide) {
    const app = document.getElementById('app');
    app.innerHTML = '';
    let row = document.createElement('div');
    row.setAttribute('class', 'gridrow');
    for (let i = 1; i <= numSquare; i++) {
        const square = generaCella(i, cellPerSide);
        row.append(square)
    }
    app.append(row)
}

function generaCella(numCell, cellPerSide) {
    let square = document.createElement('div');
    square.setAttribute('class', 'box');
    square.style.width = `calc(100% / ${cellPerSide})`;
    square.style.height = `calc(100% / ${cellPerSide})`;
    square.classList.add('pointer');
    square.innerHTML = `<span>${numCell}</span>`
    square.addEventListener('click', coloraCella);
    return square;
}

function gameOver(){
    score.innerHTML=`<h3 class='text-center'>Hai perso!</h3>`;
    square.removeEventListener("click", gameOver);
}


function coloraCella() {
    let num = parseInt(this.innerText);
    ATTEMPTS++;
    if (bombs.includes(num)) {
        this.style.backgroundColor = "red";
        this.style.backgroundImage = "url(./img/bomb.png)";
        this.removeEventListener("click", coloraCella);
    
    } else {
        console.log(ATTEMPTS)
        this.style.backgroundColor = "rgb(0 225 101)";
        score.innerHTML=`<p class='text-center'>Tentativi: ${ATTEMPTS}</p>`;
    }
    this.classList.remove('pointer');
    this.removeEventListener("click", coloraCella);
}

function createScore(){
    let divScore= document.getElementById('score');
        console.log(divScore)
        let score = document.createElement('p');
        score.setAttribute('class', 'text-center')
        score.innerText='Tentativi:'
        divScore.append(score)
}





































///////////////////////////

/*function getRandomInt(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}



document.getElementById('play').addEventListener('click', stampareGriglia);

//Stampare griglia
function stampareGriglia() {
    let app = document.getElementById('app');
    app.innerHTML = '';
    let row = document.createElement('div');
    row.setAttribute('class', 'row justify-content-center align-content-center');
    let cols = creaColonne();
    app.append(row)
    row.innerHTML = cols;
    cols = document.getElementsByClassName('col');

    function active() {
        let cellsBg = document.querySelectorAll('.col');
        return cellsBg;
    }
    let colora = active();
    for (let c = 0; c < colora.length; c++) {
        let i = c;
        colora[c].addEventListener('click', function active() {
            colora[i].classList.add('active')
        })
    }
}



//////////////////

//Funzione click



//Creo colonne
function creaColonne() {
    let cols = '';

    const difficulty = document.querySelector('#difficulty');
    console.log(difficulty.selectedIndex)

    if (difficulty.selectedIndex === 0) {
        let cells = 100;
        let app = document.getElementById('app').classList.add('easy');
        app = document.getElementById('app').classList.remove('hard', 'crazy');
        for (let i = 1; i <= cells; i++) {
            cols += `<div class="col col-1 debug">${i}</div>`

        }
        return cols;

    } else if (difficulty.selectedIndex === 1) {
        let cells = 81;
        let app = document.getElementById('app').classList.add('hard');
        app = document.getElementById('app').classList.remove('easy', 'crazy');

        for (let i = 1; i <= cells; i++) {
            cols += `<div class="col col-1 debug">${i}</div>`
        }
        for (let c = 0; c < cells.length; c++) {
            let i = c;
            cells[c].addEventListener('click', function () {
                cells[i].classList.add('active')
            })
        }
        return cols;

    } else {
        let cells = 49;
        let app = document.getElementById('app').classList.add('crazy');
        app = document.getElementById('app').classList.remove;
        ('easy', 'hard');

        for (let i = 1; i <= cells; i++) {
            cols += `<div class="col col-1 debug">${i}</div>`
        }
        return cols;
    }
}*/