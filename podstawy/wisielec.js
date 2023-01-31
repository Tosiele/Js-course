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

/*
PLAN:
[]wylosuj słowo (losowanie słowa z bazy i tworzenie tablicy o tej samej długośći z '_') -> funkcja
[]sprawdzenie czy słowo już nie zostało zgadnięte (wygrana lub przegrana) --> funkcja
wypisz słowo (liczba prób)
pobierz literę
uzupełnij puste słowo (szukanie indexu i zamienianie litery lub informacja o braku tej litery)-> funkcja
narysuj wisielca (tylko jak nie zgadnie - 7 linijek od góry do)-> funkcja

DO DODANIA:
lista słów do wylosowania

*/
/*
let word = "home";
word = word.split('');
console.log(word);
*/

const wordCollection = ["pink", "elephant", "dog", "home", "runner", "pizza", "usa", "unsafe", "gorilla", "television", "squating"];
let guesses = 7;
let wordToGuess = [];
let arrayForGuessing = [];
let readlineSync = require('readline-sync');
let guess;

gamePrep();
console.log(wordToGuess);


for (; ; guesses--) {

    if (winCheck() == 0){
        break;
    };

    console.log("Your word to guess will be: " + arrayForGuessing);
    console.log(`You have ${guesses} guesses left`);
    guess = readlineSync.question("\nWhat is your letter of choice? ")
    

    let index;
    index = wordToGuess.indexOf(guess);

    if (index == undefined){
        console.log("Your letter unfortunately isn't here. Try another one.");
    }else{
        arrayForGuessing[index] = wordToGuess[index];
        console.log(arrayForGuessing);
    }
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
    if (arrayForGuessing === wordToGuess){
        console.log("Congrats, you won!");
        return 0;
    }else if (guesses == 0){
        console.log("You lose. You'll be hanging for eternity.");
        return 0;
    }
};