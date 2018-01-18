Zadanie domowe nr9.

Na podstawie tablicy userów:
```
[
   {firstName: 'Tomasz', lastName: 'Doe', age: 23, city: 'London', id: 1},
   {firstName: 'Monika', lastName: 'Brosman', age: 35, city: 'Sosnowiec', id: 2},
   {firstName: 'Witek', lastName: 'Pitt', age: 40, city: 'Chicago', id: 3},
   {firstName: 'Kasia', lastName: 'Belucci', age: 15, city: 'Bruksela', id: 4}
];
```
- stworzyć dynamicznie tabelę <table> i wypełnić ją danymi z tablicy users. (mamy!)

A.
- Pierwsza komórka powinna zawierać checkbox, zaznaczenie checkboxa
  ma wyświetlić w konsoli ID danego użytkownika
- Ostatnia komórka powinna zawierać X z klasą remove-icon, który usuwa dany rząd
- rząd powinien zawierać klasę table-row
- komórka powinna zawierać klasę table-cell
- najechanie na rząd ma go podświetlić

B.
- nad tabela być formularz, który pobiera dane usera i puszuje go do tablicy users i od razu pokazuje na widoku.
- formularz ma mieć select, z 5 miastami do wyboru (Twoja decyzja), pozostałe wartości pobrane z inputów textowych
- przycisk do dodania użytkownika ma być odblokowany jeśli wiek age > 18 a firstName ma więcej niż 3 litery
*/

Wykonać A. i B.! Powodzenia!

Stan początkowy (gotowa tabica z zajęć)
```
const users = [
    {firstName: 'Tomasz', lastName: 'Doe', age: 23, city: 'London', id: 1},
    {firstName: 'Monika', lastName: 'Brosman', age: 35, city: 'Sosnowiec', id: 2},
    {firstName: 'Witek', lastName: 'Pitt', age: 40, city: 'Chicago', id: 3},
    {firstName: 'Kasia', lastName: 'Belucci', age: 15, city: 'Bruksela', id: 4}
];

const $table = $('<table class="table table-dark">').appendTo('body');

const getRowsWithUsers = () => {
    return users.map(user => {
        return $(`
        <tr>
            <td>${user.id}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.age}</td>
            <td>${user.city}</td>
        </tr>
        `)
    })
};

$table.append(getRowsWithUsers());
```