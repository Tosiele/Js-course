# Kurs javaScript - **rozszerzenie**
## Lekcja pierwsza - *obsługa wyjątków*
- try {*niepewny kod*} --> jesli nie mamy pewności co do tego czy dany kod się wykona (ponieważ np użytkownik podać może złą watość)
- catch() {*co zrobić gdy coś pójdzie nie tak*} --> pisany pod *try{}*, mówi co robić jeśli wystąpi błąd w danym kodzie, w nawiasie *()* tworzymy obiekt do którego zostanie wrzucona treść błędu
    - najczęściej używa sie catch(**ex**) od exeption
    - console.error(ex.message) --> wyświetla główną/najważniejszą treść erroru
- finally {} --> można dopisac po catch(), wykona się niezależnie od tego czy kod wykonał sie prawidłowo czy nieprawidłowo