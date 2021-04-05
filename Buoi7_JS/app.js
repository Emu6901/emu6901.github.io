nameValue = document.querySelector('#name');
ageValue = document.querySelector('#age');
btnAdd = document.querySelector('#btn');
table = document.querySelector('#table');
modal = document.querySelector('#myModal');
closeBtn = document.querySelector('#close');
console.log(nameValue, ageValue, btnAdd, table);
let student = [];
let student_ = [];
let reg = /\d/;
function myFunc() {
    if (nameValue.value && ageValue.value && ageValue.value > 0 && ageValue.value<=150 && !reg.test(nameValue.value)) {
        student.push([' '+nameValue.value ,  ageValue.value])
        console.log(student);
        table.innerHTML +='<li>' + nameValue.value + ',' + ageValue.value + '</li>' + '<br>';
    }
    else {
        modal.style.display = 'block';
    }
}
closeBtn && closeBtn.addEventListener('click', ()=>{
    modal.style.display = 'none';
})
window.onbeforeunload = function () {
    localStorage.clear();
    localStorage.setItem(student_, student);
}
window.onload = function () {
    let temp = localStorage.getItem(student_).split(' ');
    temp.forEach((e)=>{
        console.log(e);
        let regex = /\w+,\d+/;
        let ele = e.match(regex)?e.match(regex)[0].split(','):"";
        console.log(ele);
        if (ele) student.push([ele,' ']);
    })
    student.forEach((e)=>{
        if (e!=""){
            table.innerHTML+='<li>' + e[0] + '     ' + e[1] + '</li>' + '<br>';
        }
    })
}




