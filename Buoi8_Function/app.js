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
    if (nameValue.value && !reg.test(nameValue.value)) {
        id = (parseInt(id, 10) + 1);
        student.push([id, nameValue.value])
        try {
            await axios.post("https://606b1c60f8678400172e5a1d.mockapi.io/api/myapi", {
                'name': nameValue.value,
            });
        }
        catch (error) {
            modal.style.display = 'block';
            insideText.innerText = error.toString();
        }
        table.innerHTML += '<li>' + id + "    " + nameValue.value + '</li>' + '<br>';
    }
    else {
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
                table.innerHTML += '<li>' + e.id + "    " + e.name + '</li>' + '<br>';
            }
            id = e.id;
        })
    } catch (error) {
        modal.style.display = 'block';
        insideText.innerText = error.toString();
    }

}
