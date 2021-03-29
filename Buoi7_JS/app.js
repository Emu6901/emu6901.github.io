nameValue = document.querySelector('#name');
ageValue = document.querySelector('#age');
btnAdd = document.querySelector('#btn');
table = document.querySelector('#table')
console.log(nameValue,ageValue,btnAdd,table);
let student = []
function myFunc() {
    if (nameValue.value && ageValue.value && ageValue.value > 0){
        student.push([nameValue.value,ageValue.value]);
        table.innerHTML += nameValue.value+ '     ' + ageValue.value + '<br>';
    }
    else{
        alert('Invalid Property');
    }
}
