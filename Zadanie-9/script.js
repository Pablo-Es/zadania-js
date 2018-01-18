

    const users = [
        {firstName: 'Tomasz', lastName: 'Doe', age: 23, city: 'London', id: 1},
        {firstName: 'Monika', lastName: 'Brosman', age: 35, city: 'Sosnowiec', id: 2},
        {firstName: 'Witek', lastName: 'Pitt', age: 40, city: 'Chicago', id: 3},
        {firstName: 'Kasia', lastName: 'Belucci', age: 15, city: 'Bruksela', id: 4}
    ];
const $container = $('.container');
    const $table = $('<table class="table table-striped">').appendTo($container);
    const getRowsWithUsers = () =>
        users.map(user => {
            return $(`
        <tr class="table-row">
            <td class="table-cell"><input class="input-check" type="checkbox" data-id="${user.id}"></td>
             <td>${user.id}</td>
            <td class="table-cell">${user.firstName}</td>
            <td class="table-cell">${user.lastName}</td>
            <td class="table-cell">${user.age}</td>
            <td class="table-cell">${user.city}</td>
             <td class="table-cell remove-icon"><button type="button" class="close" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button></td>
        </tr>
        `)
        });

    $table.append(getRowsWithUsers());

const $checkbox = $('.input-check');

function showIdInConsole() {
    if($(this).prop('checked')) {
        console.log($(this).data('id'));

    }

}
$table.on('change','.input-check', showIdInConsole);

const $removeRowBtn = $('.remove-icon');

function removeRow() {

   return $(this).parent().remove();
}
$table.on('click','.remove-icon', removeRow);

const $allRows = $('.table-row');

 function addClassName(name) {
     return function () {
         $(this).addClass(name);
     };
 }
 function removeClassName(name) {
     return function () {
         $(this).removeClass(name);
     };
 }
$table.on({
    mouseenter: addClassName('greyColor'),
    mouseleave: removeClassName('greyColor')
},'.table-row');

const $inputUserName = $('#inputName');
const $inputSurname = $('#inputSurname');
const $inputAge = $('#inputAge');
const $inputCity = $('#inputCity');
const $submitBtn = $('button[type="submit"]');

    function isOptionsInvalid() {
        const MIN_REQUIRED_NAME_LENGTH = 4;
        const MIN_REQUIRED_AGE_VALUE = 19;
        return $inputUserName.val().length < MIN_REQUIRED_NAME_LENGTH ||
            $inputAge.val() < MIN_REQUIRED_AGE_VALUE;

    }

    function validateSubmitBtn() {
        $submitBtn.prop('disabled', isOptionsInvalid());
    }

    $inputUserName.add($inputAge).on('keyup', validateSubmitBtn);


function addToArray() {
   event.preventDefault();
   users.push({
       firstName: $inputUserName.val(),
       lastName: $inputSurname.val(),
       age: $inputAge.val(),
       city: $inputCity.val(),
       id: users.length + 1
   });
     $table.html(getRowsWithUsers());
}
$submitBtn.on('click', addToArray);




