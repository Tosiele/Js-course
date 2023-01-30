# Kurs JavaScript
## Lekcja pierwsza - *pierwszy program*
- console.log("tekst jaki chcemy wypisać")
- Date() -> pobiera obecną datę
- alert("tekst który wyskoczy jako powiadomienie od strony")
- żeby zinterpretować program 
    - w terminalu wpisujemy *node [nazwa pliku]* 
    - robimy run and debug
- ctrl + k and ctrl + c --> po zaznaczeniu tekstu komentuje go
- ctrl + k and ctrl + u --> po zaznaczeniu tekstu zdejmuje komentarz

---

## Lekcja druga - *zmienne*
- var --> zmienna globalna, może zostać nadpisana 
- let --> zmienna blokowa (dla danego bloku), nie może zostać ponownie zadekarowana
- const --> zmienna stała/niezmienna
- wszystkie zmienne mogą być każdego typu - stringi, number, null - object, boolean, undefined
- typeof *nazwa zmiennej* --> sprawdzenie typu zmiennej

---

## Lekcja trzecia - *operatory*
- ** --> potęgowanie
- == (przeciwieństwo !=) --> porównywanie wyłącznie wartości zmiennej
- === (przeciwieństwo !==) --> porównywanie zarówno wartości jak i typu zmiennej
- !(*warunek logiczny*) --> negacja warunku (jeśli warunek jest true to wypisze nam false)

---

## Lekcja czwarta - *obiekty*
- obiekty to wskaźniki na miejsce w pamięci w którym znajduje się bardziej złożony zbiór informacji
- jeśli stworzymy obiekt *tomato* a nastepnie przypiszemy go obiektowi *cucumber* to w rzeczywistości wskazuja one na to samo miejsce w pamięci więc na ten sam obiekt. Jest to ten sam obiekt --> tomato == cucumber -> true
- przykłąd obiektu:
    - car = {

        color = red,
        
        maxSpeed = 320


        } ;

---

## Lekcja piąta - *tablice*
- *nazwa tablicy*.push(*elementy*) --> dodaje elementy na koniec tablicy
- *nazwa*[*numer miejsca w tablicy*] --> doastaje się do danego miejsca w tablicy (można go osobno zdefiniować np. tab[0] = 6)
- *nazwa*.pop --> wyjmuje ostatni element z tablicy i go zwraca
- *nazwa*.length --> zwraca długość tablicy
- *nazwa*.sort() --> sortuje tablicę leksykograficznie (jeśli maamy tablicę [1, 13, 2] to taka zostanie bo 13 zaczyna się od 1)