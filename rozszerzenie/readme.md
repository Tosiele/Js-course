# Kurs javaScript - **rozszerzenie**
## Lekcja pierwsza - *obsługa wyjątków*
- try {*niepewny kod*} --> jesli nie mamy pewności co do tego czy dany kod się wykona (ponieważ np użytkownik podać może złą watość)
- catch() {*co zrobić gdy coś pójdzie nie tak*} --> pisany pod *try{}*, mówi co robić jeśli wystąpi błąd w danym kodzie, w nawiasie *()* tworzymy obiekt do którego zostanie wrzucona treść błędu
    - najczęściej używa sie catch(**ex**) od exeption
    - console.log(ex.message) --> wyświetla główną/najważniejszą treść erroru
- finally {} --> można dopisac po catch(), wykona się niezależnie od tego czy kod wykonał sie prawidłowo czy nieprawidłowo

---

## Lekcja druga - *async*
- setTimeout(*nazwa funkcji, czas opóźnienia (ms), argumenty funkcji) --> opóźnia działanie danej funkcj
- () => {*działanie funkcji*} --> funkcja strzałkowa, tworzona i jednocześnie wywoływana w tym samym miejscu, zamiast nawiasu *()* można napisać nazwę argumentu (można też w nawiasie)
- jako argument funkcji możemy użyć innej funkcji
- let zmienna = *new* Promise((resolve, reject) => {*kod funkcji promise*}) --> utowrzenie zmiennej i przypisanie do niej obietnicy (**utworzenie obietnicy**)
    - resolve i reject to funkcje i jednocześnie argumenty funkcji strzałkowej wewnątrz promise
    - w kodzie funkcji promise piszemy kod jaki może się wykonać
        - jeśli się wykona piszemy resolve(*tekst*)
        - jeśli sie nie wykona piszemy reject(*tekst*)
        - resolve i reject są jak return
- zmienna.then (*np spodziewany rezultat* => {*co chcemy żeby się stało np rezultat będzie wypisany*})--> wywołanie obietnicy (**konsumpcja obietnicy**), kiedy promise się wykona (czyli rezultat to reject) wtedy masz coś zrobić
- jak w przypadku *try* możemy użyć .catch po .then
    - .catch(error => {*np wypisanie rezultatu nieudanego promisa*}) --> np wypisze to co zaprogramowane jest w przypadku nie udania się promise czyli reject 
- then używamy po to żeby ustawić kolejność wykonywanych działań, np poczekać aż wykonają sie dwie asynchroniczne funkcje obliczeniowe a następnie rozpocząć kolejną serię funkcji
- Promise.all([*funkcje do wykonania*]) --> puszczamy kilka funkcji na raz i wypisujemy tablicę wyników tych funkji
    - zwraca wynik dopiero wtedy gdy wszytkei przekazane do niej obietnice zostaną zakończone pozywtywnie
    - .allSettled() - zwraca wynik nawet wtedy kiedy nie wszystkie obietnice kończą się pozytywnie
    - .race() - czeka tylko na pierwszą z obietnic która się wykona

- async function ... --> tworzy funkcję w której możemy poczekać na wykonanie kodu asynchronicznego
- await *function* --> czeka na wykonanie danej funkcji, może być użyte tylko w async function