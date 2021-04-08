nameValue = document.querySelector('#name');
ageValue = document.querySelector('#age');
btnAdd = document.querySelector('#btn');
table = document.querySelector('#table');
modal = document.querySelector('#myModal');
closeBtn = document.querySelector('#close');
insideText = document.querySelector('#insideText');
let student = [];
let reg = /\d/;
let id = 0;
async function  myFunc() {
    let name_ = nameValue.value;
    nameValue.value = '';
    if (name_ && !reg.test(name_)) {
        
        id = (parseInt(id, 10) + 1);
        student.push([id, name_])
        try {
            await axios.post("https://606b1c60f8678400172e5a1d.mockapi.io/api/myapi", {
                'name': name_,
            });
        }
        catch (error) {
            modal.style.display = 'block';
            insideText.innerText = error.toString();
        }
        table.innerHTML += '<li class="textInList">' + id + "    " + name_ + '</li>' + '<br>';
        
    }
    else {
        nameValue.value = '';
        modal.style.display = 'block';
        insideText.innerText = 'Invalid input';
    }
}
closeBtn && closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
})
// window.onbeforeunload = function () {
//     localStorage.clear();
//     localStorage.setItem(student_, student);
// }
window.onload = async function () {
    try {
        const response = await axios.get('https://606b1c60f8678400172e5a1d.mockapi.io/api/myapi');
        console.log(response.data);
        response.data.forEach((e) => {
            console.log(e);
            if (e) {
                student.push(e);
            }
        })
        student.forEach((e) => {
            if (e != "") {
                table.innerHTML += '<li class="textInList">' + e.id + "    " + e.name + '</li>' + '<br>';
            }
            id = e.id;
        })
    } catch (error) {
        modal.style.display = 'block';
        insideText.innerText = error.toString();
    }
}
const inputs = document.querySelector('.elementor-row input');
const labels = document.querySelectorAll('.elementor-row label');
// inputs.addEventListener("focus",()=>{
    labels.forEach((label) => {
        console.log(label.innerText.split(''));
        label.innerHTML = label.innerText
        .split('')
        .map((letter,idx) => `<span style="transition: ${idx*50}ms;">${letter}</span>`)
        .join('')
    });
// })
// inputs.addEventListener("focusout",()=>{
//     labels.forEach(label => {
//         label.innerHTML = `FullName`
//     });
// })
const labelElement = document.querySelectorAll('.elementor-row span');
inputs.addEventListener("focus",()=>{
    labelElement.forEach((e)=>{
        e.classList.toggle('movewhenclick');
    })
})
inputs.addEventListener("focusout",()=>{
    labelElement.forEach((e)=>{
        e.classList.toggle('movewhenclick');
    })
})