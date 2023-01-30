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
Tablica ze słowem
Tablica o tej samej długości - do uzupełniania, na początku wypełniona '_'
liczba prób
W pętli:
wyświetlanie pustej tablicy do uzupełnienia
Pytanie o literę
Pszeszukiwanie w zagnieżdżonej pętli o literę
uzupełnianie odpowiadających miejsc w pustej tablicy
zmniejszenie liczby prób

DO DODANIA:
lista słów do wylosowania
system losowania słów
rysunek wisielca
*/
/*
let word = "home";
word = word.split('');
console.log(word);
*/

let guesses = 10;
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
    guess = readlineSync.question("What is your letter of choice? ")
    console.log(guess);

};