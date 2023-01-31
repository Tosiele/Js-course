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