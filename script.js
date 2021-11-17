import {ruswords} from "./words.js"
let proverka = document.getElementById("proverka")
let letLetters = "";
let playerInput = document.getElementById("playerInput")
let words = ["kitchen","fork","knife","honey","monkey"]
words = ruswords
let shifre = document.getElementById("shifre")
let secretWord = words[Math.floor(Math.random()*words.length)]
let zz = document.getElementById("zz")
let povesili = document.getElementById("povesili")
let buBukva = document.getElementById("buBukva")
let bugalter = 0;
let newNewGame = document.getElementById("newNewGame")
let naNastroiki = document.getElementById("naNastroiki")
let foForma = document.getElementById("foForma")
let diDio = document.getElementById("diDio")
let mult = document.getElementById("mult")
let odin = document.getElementById("odin")
let multiDiDio = document.getElementById("multiDiDio")
let submitBoba = document.getElementById("submitBoba")
let slovoInInput = document.getElementById("slovoInInput")
let mode = "single";
playerInput.select()
console.log(zz.innerHTML[6])
shifre.innerHTML = "*".repeat(secretWord.length)

function newGame(){
    console.log(mode);
    if (mode == "single") {
        zz.innerHTML = "Виселица. Я уверен ты 100% умрёшь.Но правила игры всё равно есть."
    }
    else{
        zz.innerHTML = "Виселица.multiplayer. Я уверен ты 100% умрёшь.Но правила игры всё равно есть."
    }
    buBukva.innerHTML = "Правила: вводи букву и проверь что будет."
    proverka.disabled = false;
    letLetters = "";
    bugalter = 0;
    povesili.src = "img/hangman"+bugalter+".png"
    shifre.innerHTML = "*".repeat(secretWord.length)
}
newNewGame.onclick = function () {
    if (mode == "single") {
        secretWord = words[Math.floor(Math.random()*words.length)]
    }
    else{
        multiDiDio.style.transform = "translateY(0)"
    }
    newGame()
}
proverka.onclick = function (event) {
    event.preventDefault();
    if (secretWord.includes(playerInput.value) == true )  {
        let newShifre = ""
        for (let i = 0; i < secretWord.length; i = i + 1) {
            if (playerInput.value == secretWord[i]) {
                newShifre = newShifre + secretWord[i]
            } else {
                newShifre = newShifre + shifre.innerHTML[i]
            }
            
        }
        
        shifre.innerHTML = newShifre;
        if (secretWord == shifre.innerHTML) {
            zz.innerHTML = "Победа"
            proverka.disabled = true;
        }
    }
    else{
        bugalter = bugalter + 1
        povesili.src = "img/hangman"+bugalter+".png"

    }
    if (bugalter == 6) {
        proverka.disabled = true;
        zz.innerHTML = "поражение.секретное слово было:" + secretWord
    }
    if (!letLetters.includes(playerInput.value)) {
        letLetters = letLetters + playerInput.value;
    }
    
    buBukva.innerHTML = "Использованые буквы:" + letLetters;
    console.log(letLetters);
    playerInput.select()
}
naNastroiki.onclick = function(){
console.log(5);
diDio.style.transform = "translateY(0)"
}
diDio.onclick = function(){
    diDio.style.transform = "translateY(-100%)"
}
diDio.children[0].onclick = function(event){
    event.stopPropagation();
}
odin.onclick = function(){
    mode = "single"
    secretWord = words[Math.floor(Math.random()*words.length)]
    console.log("bibaBoba")
    newGame()
    diDio.style.transform = "translateY(-100%)"
}
mult.onclick = function(){
    mode = "multiplayer"
    console.log("bobaBiba")
    diDio.style.transform = "translateY(-100%)"
    multiDiDio.style.transform = "translateY(0)"
}
submitBoba.onclick = function(){
    console.log(slovoInInput.value);
    if (slovoInInput.value) {
         multiDiDio.style.transform = "translateY(-100%)"
    secretWord = slovoInInput.value
    newGame()
    }
}






















































































