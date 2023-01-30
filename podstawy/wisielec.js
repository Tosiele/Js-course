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
wylosuj słowo (losowanie słowa z bazy i tworzenie tablicy o tej samej długośći z '_') -> funkcja
sprawdzenie czy słowo już nie zostało zgadnięte (wygrana lub przegrana) --> funkcja
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

let wordCollection = [pink, elephant, dog, home, runner, pizza, usa, unsafe, gorilla, television, squating];
let guesses = 7;
let wordToGuess = ['h', 'o', 'm', 'e'];
let arrayForGuessing = [];

for (let i = wordToGuess.length; i > 0; i--) {
    arrayForGuessing.push(' _ ') //making a empty array for the user to guess
};

let readlineSync = require('readline-sync');
let guess;

for (; guesses !== 0; guesses--) {

    if (arrayForGuessing === wordToGuess){
        break;
    };

    console.log("Your word to guess will be: " + arrayForGuessing);
    console.log(`You have ${guesses} guesses left`);
    guess = readlineSync.question("What is your letter of choice? ")
    

    function findLetter(guess)
    let index = wordToGuess.indexOf(guess);
    
    if (index == undefined){
        console.log("Your letter unfortunately isn't here. Try another one.");
    }
    else{
        arrayForGuessing[index] = wordToGuess[index];
        console.log(arrayForGuessing);
    }

    

};