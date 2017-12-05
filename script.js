/* 1. Napisz funkcję, która przyjmuje trzy parametry - (sender, sms, receiver) a następnie zwraca stringa w następującym formacie:

    "(FROM: sender) (TO: receiver) (MESSAGE: sms)"

UWAGA: - Zwróć uwagę na wielkość liter w imionach oraz brak whitespaces dla sms

Przykładowy wynik dla następujących zmiennych:
    var sender = 'mikey';
var sms = '   Hello Jane, i am really tired today, i will call you tommorrow.         ';
var receiver = 'JANE';

WYNIK = "(FROM: Mikey) (TO: Jane) (MESSAGE: Hello Jane, i am really tired today, i will call you tommorrow.)"; */

function sendMessage(sender, sms, receiver) {
    return '(FROM: ' + sender.charAt(0).toUpperCase() + sender.substring(1).toLowerCase() + ')' + ' ' + '(TO: ' + receiver.charAt(0).toUpperCase() + receiver.substring(1).toLowerCase() + ')'
        + ' ' + '(MESSAGE: ' + sms.trim() + ')';
}

/* 2. Napisz funkcję, która przyjmuje dwa parametry - firstName oraz lastName, a następnie zwraca inicjały rozdzielone kropką, zwrócony string powinien składać się z wielkich liter. Przykładowy wynik dla następujących zmiennych: var firstName = 'john'; var lastName = 'doe';

WYNIK = 'J.D'; */

function getInitials(firstName, lastName) {
    return firstName.charAt(0).toUpperCase() + '.' + lastName.charAt(0).toUpperCase();
}
/* 3. Napisz funkcję, która generuje losową liczbę, zaokrągloną do dwóch liczb po przecinku a następnie zwraca stringa "Twoja szczęśliwa liczba to: TUTAJ_TA_LOSOWA_LICZBA" */


function getNumber() {
    return 'Twoja szczęśliwa liczba to: ' + (Math.random() * 48 +1).toFixed(2);
}
/* 4. Napraw bugi we funkcji oraz popraw formatowanie nazewnictwa. Funkcja powinna zwrocić sumę tip i price

 Function get_dinner_price {
   tip: '20';
   tip + price;
   var price = 100;
 }
get_dinner_price(); // musi zwrócić liczbę o wartości 120 (100 + 20) */

function getDinnerPrice() {
    var tip = 20;
    var price = 100;
    return price + tip;
}

