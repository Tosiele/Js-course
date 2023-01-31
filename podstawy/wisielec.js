/*
Gracz ma odgadnąć słowo
Ma ograniczoną ilość prób
Na początku zna długość słowa

W każdej próbie może podać jedną literę:
- Jeżeli znajduje się w słowie - każde jej wystąpienie jest ujawniane na odpowiednim miejscu
- Jeżeli nie znajduje się - otrzymuje informację, że nie ma takiej litery w słowie

Gra kończy się gdy słowo zosatnie odgadnięte lub skończą się próby

UŻYĆ:
zmienne
tablice
pętle
funkcje
biblioteki zewnętrzne (już zainstalowana)

ZAŁOŻYĆ:
stała lista słów do odgadnięcia

DODATKOWO:
rysuje się wisielec po nieudanej próbie
_________
|/      |
|       O
|       ^
|      /|\
|       ^
|      / \


*/


const wordCollection = ["pink", "elephant", "dog", "home", "runner", "pizza", "usa", "unsafe", "gorilla", "television", "squating", "angry", "ilusion", "fighter", "width"];
let guesses = 15;
let wordToGuess = [];
let arrayForGuessing = [];
let usedLetters = [];
let readlineSync = require('readline-sync');
let guess, index;
let mistakes = 0;


gamePrep();

while (guesses > 0) {

    console.log("\nYour word to guess is: " + arrayForGuessing);
    console.log(`You have ${guesses} guesses left.\n`);
    console.log("The letters you already used are: \n" + usedLetters)

    guess = readlineSync.question("\nWhat is your letter of choice? ")
    guess = guess.toLowerCase();
    usedLetters.push(guess);
    
    arrayFilling();

    guesses--;
    if (winCheck() == 0){
        break;
    };

};

//----------------------FUNCTIONS-----------------------

function gamePrep(){
    //drawing a word and making it an array
    wordToGuess = wordDraw(wordCollection);
    wordToGuess = wordToGuess.split('');

    //making a empty array for the user to guess
    for (let i = wordToGuess.length; i > 0; i--) {
        arrayForGuessing.push(' _ ') 
    };
};


function wordDraw(words)
{
    const random = Math.floor(Math.random() * (words.length));
    return words[random];
};


function winCheck(){
    if (arraysTheSame(arrayForGuessing, wordToGuess)){
        console.log("\nCongrats, you won!");
        console.log("Your word was "+ arrayToString(wordToGuess) + "\n");
        return 0;
    } else if (guesses == 0){
        console.log("\nYou lose. You'll be hanging for eternity.");
        mistakes = 15;
        drawHangman();
        return 0;
    }
};


function arraysTheSame(a, b){
    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) 
        return false;
      }
      return true;
};

function arrayToString(array){
    let word = array[0];
    for (var i = 1; i < array.length; i++) {
        word = word + array[i];
    };
    return word;
};


function arrayFilling(){
    
    index = wordToGuess.indexOf(guess);

    if (index == -1){
        console.log("\nYour letter unfortunately isn't here.\n");
        
        mistakes++;
        if (mistakes != 15){
            drawHangman();
        };

    } else {
        
        while(index != -1){
        
        //if you found a letter fill the array in the right place
        arrayForGuessing[index] = wordToGuess[index];
        index = wordToGuess.indexOf(guess, index + 1); //if multiple same letters appear search for another one
        
        }
    }
}


function drawHangman(){
    switch(mistakes){
        case 1:{
            console.log ("|");
            break;
        }
        case 2:{
            console.log ("|");
            console.log ("|");
            break;
        }
        case 3:{
            console.log ("|");
            console.log ("|");
            console.log ("|");
            break;
        }
        case 4:{
            console.log ("|");
            console.log ("|");
            console.log ("|");
            console.log ("|");
            break;
        }
        case 5:{
            console.log ("|");
            console.log ("|");
            console.log ("|");
            console.log ("|");
            console.log ("|");
            break;
        }
        case 6:{
            console.log ("|");
            console.log ("|");
            console.log ("|");
            console.log ("|");
            console.log ("|");
            console.log ("|");
            break;
        }
        case 7:{
            console.log ("|/");
            console.log ("|");
            console.log ("|");
            console.log ("|");
            console.log ("|");
            console.log ("|");
            break;
        }
        case 8:{
            console.log ("_________");
            console.log ("|/");
            console.log ("|");
            console.log ("|");
            console.log ("|");
            console.log ("|");
            console.log ("|");
            break;
        }
        case 9:{
            console.log ("_________");
            console.log ("|/      |");
            console.log ("|");
            console.log ("|");
            console.log ("|");
            console.log ("|");
            console.log ("|");
            break;
        }
        case 10:{
            console.log ("_________");
            console.log ("|/      |");
            console.log ("|       O");
            console.log ("|");
            console.log ("|");
            console.log ("|");
            console.log ("|");
            break;
        }
        case 11:{
            console.log ("_________");
            console.log ("|/      |");
            console.log ("|       O");
            console.log ("|       ^");
            console.log ("|");
            console.log ("|");
            console.log ("|");
            break;
        }
        case 12:{
            console.log ("_________");
            console.log ("|/      |");
            console.log ("|       O");
            console.log ("|       ^");
            console.log ("|      /|\\");
            console.log ("|");
            console.log ("|");
            break;
        }
        case 13:{
            console.log ("_________");
            console.log ("|/      |");
            console.log ("|       O");
            console.log ("|       ^");
            console.log ("|      /|\\");
            console.log ("|       ^");
            console.log ("|");
            break;
        }
        case 14:{
            console.log ("_________");
            console.log ("|/      |");
            console.log ("|       O");
            console.log ("|       ^");
            console.log ("|      /|\\");
            console.log ("|       ^");
            console.log ("|      / \\");
            break;
        }
        case 15:{
            console.log ("  ___|__  ");
            console.log (" /      \\ ");
            console.log (" | X  X |");
            console.log (" \\  __  /");
            console.log ("  \\  U /");
            console.log ("   ----");
            break;
        }
    };

};