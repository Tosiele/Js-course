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
[]funkcja pobierająca dane z api - USD
[]funkcja wyświetlająca datę (w niej funkcja formatująca datę)
to wszystko w set intervall które będzie wypisywać rezultaty tych funkcji

potem funkcja zapisująca dane w pliku txt i zapisywała go
*/

import fetch from 'node-fetch';
import moment from 'moment';

let date = moment().format('MMMM Do YYYY, h:mm:ss a');

let data; 
data = await getJson(data); //taking data from API to json format

let exchangeRate;
exchangeRate = await getExchangeRate(data); //taking exchange rate from json

console.log("DATE OF CHECK: " + date);
console.log("USD EXCHANGE RATE: " + exchangeRate);



//----------------------FUNCTIONS-----------------------

async function getJson(currencyInfo){
    currencyInfo = await fetch("http://api.nbp.pl/api/exchangerates/rates/c/usd/today/");
    const json = await currencyInfo.json();
    return (json);
}

function getExchangeRate(json){
    const jsonRates = json.rates[0];
    const arrayRates = Object.values(jsonRates);
    const currency = arrayRates[2];
    return currency;
}