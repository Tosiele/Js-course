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

narysuj wisielca (tylko jak nie zgadnie - 7 linijek od góry do)-> funkcja

*/


const wordCollection = ["pink", "elephant", "dog", "home", "runner", "pizza", "usa", "unsafe", "gorilla", "television", "squating", "angry", "ilusion", "fighter", "width"];
let guesses = 14;
let wordToGuess = [];
let arrayForGuessing = [];
let readlineSync = require('readline-sync');
let guess, index;


gamePrep();

for (; ; guesses--) {

    console.log("\nYour word to guess is: " + arrayForGuessing);
    console.log(`You have ${guesses} guesses left.`);
    guess = readlineSync.question("\nWhat is your letter of choice? ")
    
    arrayFilling();

    if (winCheck() == 0){
        break;
    };

};


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
        console.log("Your word was "+ arrayToString(wordToGuess));
        return 0;
    } else if (guesses == 0){
        console.log("\nYou lose. You'll be hanging for eternity.");
        return 0;
    }
};


function arraysTheSame(a, b){
    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
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
        console.log("\nYour letter unfortunately isn't here. Try another one.");
    } else {
        
        while(index != -1){
        
        //if you found a letter fill the array in the right place
        arrayForGuessing[index] = wordToGuess[index];
        index = wordToGuess.indexOf(guess, index + 1); //if multiple same letters appear search for another one
        
        }
    }
}