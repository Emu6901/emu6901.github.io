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
regCheckWhiteSpace = /^\s/;
function myFunc() {
    if (nameValue.value && ageValue.value && ageValue.value > 0 && ageValue.value<=150 && !reg.test(nameValue.value) && !regCheckWhiteSpace.test(nameValue.value)) {
        
    }
    else {
        modal.style.display = 'block';
    }
    nameValue.value = '';
    ageValue.value = '';
    labelElement2.forEach((e)=>{
        e.classList.remove('movewhenclick');
    })
    labelElement1.forEach((e)=>{
        e.classList.remove('movewhenclick');
    })
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
            table.innerHTML+='<li class="textInList">' + e[0] + '     ' + e[1] + '</li>' + '<br>';
        }
    })
}



const inputs1 = document.querySelector('.elementor-row .age1');
const labels1 = document.querySelectorAll('.elementor-row .label1');
// inputs.addEventListener("focus",()=>{
    labels1.forEach((label) => {
        console.log(label.innerText.split(''));
        label.innerHTML = label.innerText
        .split('')
        .map((letter,idx) => `<span style="transition: ${idx*50}ms;">${letter}</span>`)
        .join('')
    });
const labelElement1 = document.querySelectorAll('.elementor-row .label1 span');
inputs1.addEventListener("focus",()=>{
    labelElement1.forEach((e)=>{
        e.classList.add('movewhenclick');
    })
})
// inputs1.addEventListener("focusout",()=>{
//     labelElement1.forEach((e)=>{
//         e.classList.toggle('movewhenclick');
//     })
// })

const inputs2 = document.querySelector('.elementor-row .age2');
const labels2 = document.querySelectorAll('.elementor-row .label2');
// inputs.addEventListener("focus",()=>{
    labels2.forEach((label) => {
        console.log(label.innerText.split(''));
        label.innerHTML = label.innerText
        .split('')
        .map((letter,idx) => `<span style="transition: ${idx*50}ms;">${letter}</span>`)
        .join('')
    });
const labelElement2 = document.querySelectorAll('.elementor-row .label2 span');
inputs2.addEventListener("focus",()=>{
    labelElement2.forEach((e)=>{
        e.classList.add('movewhenclick');
    })
})
// inputs2.addEventListener("focusout",()=>{
//     labelElement2.forEach((e)=>{
//         e.classList.toggle('movewhenclick');
//     })
// })


