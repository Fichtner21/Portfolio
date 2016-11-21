# __Sass i RWD egzamin__

### Rozwiązuj zadania w pliku __sass/style.scss__ a wynik kompilacji tego pliku zapisz do pliku __css/style.css__ - nie zmieniaj ułożenia folderów i plików! :boom: :boom: :boom:

### Pamiętaj, że zadanie jest __niezaliczone__ jeżeli nie zastosujesz się do poleceń! :bomb: :bomb: :bomb:

1. Zdefiniuj za pomocą Sass mapę o nazwie ```rainbow```, która będzie miała w sobie __7 par klucz-wartość__ a każda wartość odpowiada innemu kolorowi tęczy. Użyj kolorów podanych poniżej (ważne -  niech nazwy kolorów i wartości będą dokładnie takie same):

    - Red: ```#FF0000```
    - Orange: ```#FF7F00```
    - Yellow: ```#FFFF00```
    - Green: ```#00FF00```
    - Blue: ```#0000FF```
    - Indigo: ```#4B0082```
    - Violet: ```#8F00FF```

2. __Przy pomocy Sassa__ utwórz wszystkie klasy potrzebne aby zrobić swój własny grid. Zakładamy, że grid przyjmuje układ 7-kolumnowy oraz główny kontener posiada ```1000px``` szerokości. Klasy związane z szerokością elementu nazwij ```.col-X``` - na przykład ```.col-1```, ```.col-2``` ... ```.col-7```.
Nie zapominaj o klasach ```container``` oraz ```row```.

3. Do elementów ```section``` znajdujących się w pliku index.html dopisz taki kod, aby wszystkie sekcje zajmowały __całą wysokość i całą szerokość__ okna przeglądarki.

4. W sekcji o klasie ```section-1``` stwórz tęczę jak na załączonym obrazku poniżej:
![Rainbow Image](./img/rainbow.png)
Tęcza powinna mieścić się idealnie wewnątrz okna przeglądarki.
Otrzymasz dodatkowe punkty za zastosowanie mapy z __Zadania 1__ oraz grida z __Zadania 2__.

5. Napisz mixin o nazwie ```changeColors```, który przyjmuje jeden parametr - __kolor__. Po wywołaniu mixin dodaje do elementu dwie rzeczy:
kolor podany jako parametr ustawia jako ```background-color``` oraz dodaje do elementu pseudoklasę ```hover``` taką, że po najechaniu myszką, kolor tła staje sie jaśniejszy o 50%. Wywołaj ten mixin wewnątrz elementu o klasie ```section-2``` używając koloru ```#000000``` jako parametru.

6. W sekcji o klasie ```section-3``` znajduje się obrazek. Ustaw tej sekcji ```1000px``` wysokości. Następnie opisz odpowiednie warunki tak aby:
    * Gdy ekran ma ```1025px``` szerokości lub więcej obraz miał ```400px``` szerokości i był idealnie na środku sekcji (w pionie i poziomie);
    * Gdy ekran ma między ```768px``` a ```1024px``` szerokości (włączając w to wymienione wartości) to obrazek miał ```500px``` szerokości i był w prawym górnym rogu sekcji;
    * Gdy ekran ma ```767px``` szerokości lub mniej to obrazek ma całą dostępną szerokość sekcji.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Otrzymasz dodatkowy punkt gdy użyjesz podejścia ```mobile-first```.

## __Powodzenia!__ :star: :smile: :+1:
