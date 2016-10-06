# __Sass i RWD egzamin__

## Rozwiązuj zadania w pliku __sass/style.scss__ a wynik kompilacji tego pliku zapisz do pliku __css/style.css__ - nie zmieniaj ułożenia folderów i plików!

## Pamiętaj, że zadanie jest __niezaliczone__ jeżeli nie zastosujesz się do poleceń!

1. Zdefiniuj za pomocą Sass mapę o nazwie ```rainbow```, która będzie miała w sobie __7 par klucz-wartość__ a każda wartość odpowiada innemu kolorowi tęczy. Użyj kolorów podanych poniżej:

    - Czerwony: ```#FF0000```
    - Pomarańczowy: ```#FF7F00```
    - Żółty: ```#FFFF00```
    - Zielony: ```#00FF00```
    - Niebieski: ```#0000FF```
    - Indygo: ```4B0082```
    - Fioletowy: ```#8B00FF```

2. __Przy pomocy Sassa__ utwórz wszystkie klasy potrzebne aby zrobić swój własny grid. Zakładamy, że grid przyjmuje układ 7-kolumnowy. Klasy związane z szerokością elementu nazwij ```.col-X``` - na przykład ```.col-1```, ```.col-2``` ... ```.col-7```.

3. Do elementów ```section``` znajdujących się w pliku index.html dopisz taki kod, aby wszystkie sekcje miały __100% wysokości i szerkości viewportu__.

4. W sekcji o klasie ```section-1``` wykorzystaj swój grid aby stworzyć tęczę. Tęcza docelowo powinna składać się z 7 różnych kolumn o takiej samej szerokości a razem powinny zajmować 100% szerokości ekranu. Kolumny posiadać 100% dostępnej wysokości. Ustaw kolumnom __kolory w takiej kolejności, w jakiej są podane w Zadaniu 1__. Wykorzystaj wcześniej stworzoną mapę.

5. Napisz mixin, który przyjmuje jeden parametr - __kolor__. Po wywołaniu mixin dodaje do elementu dwie rzeczy:
kolor podany jako paramter ustawia jako background-color oraz dodaje do elementu pseudoklasę hover taką, że po najechaniu myszką, kolor tła staje sie jaśniejszy o 50%. Wywołaj ten mixin wewnątrz elementu o klasie ```section-2``` używając koloru ```#000000```.

6. Dopisz odpowiednią regułę do kolumn z __Zadania 3__ tak, aby każda kolumna zajmowała __100% szerokości oraz 400px wysokości__ gdy viewport urządzenia jest mniejszy lub równy __768px__.
