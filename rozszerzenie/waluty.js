/*
Program który regularnie sprawdza kursy walut (dowolnych) na dowolnym API
Będzie działał co jakiś określony czas
Wyniki będzie zapisywał w pliku TXT

Przykład:
DATA SPRAWDZENIA: 11 stycznia 2023 godz. 15:30:43
KURS EUR: 4,57
KURS USD: 4,25
---- ---- ----
DATA SPRAWDZENIA: 11 stycznia 2023 godz. 15:32:43
KURS EUR: 4,57
KURS USD: 4,25
---- ---- ----

Użyj:
fetch
setInterval
fs
http://api.nbp.pl/

Dla chętnych:
ładne formatowanie daty - biblioteka moment.js
*/

/*
funkcja pobierająca dane z api - USD
funkcja wyświetlająca datę (w niej funkcja formatująca datę)
to wszystko w set intervall które będzie wypisywać rezultaty tych funkcji

potem funkcja zapisująca dane w pliku txt i zapisywała go
*/

import fetch from 'node-fetch';

//const data = await fetch("http://api.nbp.pl/api/exchangerates/rates/c/usd/today/");
//const json = await data.json();
//const walutaJson = json.rates[0];

let data; 
data = await pobierzJson(data);
console.log(data);

let kurs;
kurs = await pobierzKurs(data);
console.log(kurs);
//const ratesJson = data.rates[0];
//const ratesArray = Object.values(ratesJson);
//console.log(ratesArray[2]);



async function pobierzJson(dane){
    dane = await fetch("http://api.nbp.pl/api/exchangerates/rates/c/usd/today/");
    const json = await dane.json();
    return (json);
}

function pobierzKurs(json){
    const jsonRates = json.rates[0];
    const arrayRates = Object.values(jsonRates);
    const currency = arrayRates[2];
    return currency;
}