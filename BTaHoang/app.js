var nameInput = document.querySelector('[name=name]');
var classInput = document.querySelector('[name=class]');
var ageInput = document.querySelector('[name=age]');
var imgInput = document.querySelector('[name=image]');
var imgPreview = document.querySelector('#image');

var signupForm = document.querySelector('#signup');

var validationsList = []; // field; message

var MAX_CHARS = 10;
var MIN_CHARS = 6;

var MAX_AGE = 25;
var MIN_AGE = 18;
var listSV = [];
class SV {
    constructor(id, name, age, atClass, img_src) {
        this.id = id ? id : listSV.length + 1;
        this.name = name;
        this.age = age;
        this.atClass = atClass;
        this.img_src = img_src;
    }
}
function emptyValidator(field, value) {
    if (value === '') {
        return {
            field: field,
            message: 'Please don\'t let it empty. '
        }
    }
    return null;
}
function nameValidator(value) {
    const namePattern = /^\s|^\d/;
    if (emptyValidator('name', value)) {
        return emptyValidator('name', value);
    }
    if (namePattern.test(value) || value.lenght > 10) {
        return {
            field: 'name',
            message: 'Please input a valid  name'
        }
    }
    return null;
}
function classValidator(value) {
    if (emptyValidator('class', value)) {
        return emptyValidator('class', value)
    }
    return null;
}
function ageValidator(value) {
    if (emptyValidator('age', value)) {
        return emptyValidator('age', value)
    }
    else if (value < MIN_AGE || value > MAX_AGE) {
        return {
            field: 'age',
            message: 'Your age should be 18 to 25 to join. '
        }
    }
    return null;
}
function imgValidator(value) {
    if (emptyValidator('image', value)) {
        return emptyValidator('image', value)
    }
    return null;
}
imgPreview.addEventListener('change', (e) => {
    var img = document.createElement('img');
    img.src = URL.createObjectURL(e.target.files[0]);
    var image = document.querySelector('.padding');
    var imageError = document.querySelectorAll('.errorMessage');
    if (imageError.length == 4) imageError[3].parentNode.removeChild(imageError[3]);
    image && image.parentNode.removeChild(image);
    img.classList.add('img-display');
    img.classList.add('padding');
    imgPreview.insertAdjacentElement('beforeend', img);
})
function DOMRender(testResult) {
    const element = document.createElement('small');
    element.textContent = testResult.message;
    element.classList.add('errorMessage');
    switch (testResult.field) {
        case 'name':
            nameInput.classList.add('form__invalid');
            nameInput.insertAdjacentElement('afterend', element);
            break;
        case 'age':
            ageInput.classList.add('form__invalid');
            ageInput.insertAdjacentElement('afterend', element);
            break;
        case 'class':
            classInput.classList.add('form__invalid');
            classInput.insertAdjacentElement('afterend', element);
            break;
        case 'image':
            imgInput.classList.add('form__invalid');
            imgInput.insertAdjacentElement('afterend', element);
            break;
        default:
            break;
    }
}
function resetDOM() {
    nameInput.classList.remove('form__invalid');
    ageInput.classList.remove('form__invalid');
    classInput.classList.remove('form__invalid');
    imgInput.classList.remove('form__invalid');
    document.querySelectorAll('.errorMessage').forEach(function (errMsg) {
        errMsg.parentNode.removeChild(errMsg);
    })
}
function resetValue() {
    nameInput.value = "";
    ageInput.value = "";
    classInput.value = "";
    imgInput.value = "";
    var image = document.querySelector('.padding');
    image && image.parentNode.removeChild(image);
}

function getDOM() {
    var editButtons = document.querySelectorAll('.btn-primary')
    var deleteButtons = document.querySelectorAll('.btn-danger');
    var saveButtons = document.querySelectorAll('.btn-warning');
    editButtons.forEach((element) => {
        element.addEventListener('click', (e) => {
            var saveButton = e.target.parentNode.querySelector(".btn-warning");
            var editButton = e.target.parentNode.querySelector('.btn-primary');
            var imgInput = e.target.parentNode.parentNode.querySelector('#fixedImgInput');
            console.log(imgInput);
            imgInput.addEventListener('change', (ele) => {
                var img = document.createElement('img');
                img.src = URL.createObjectURL(ele.target.files[0]);
                var image = e.target.parentNode.parentNode.querySelector('#fixedImg');
                console.log(image);
                image && image.parentNode.removeChild(image);
                img.setAttribute('width', 100);
                img.setAttribute('id', 'fixedImg')
                imgInput.insertAdjacentElement('beforeBegin', img);
                console.log(imgInput, img)
            })
            saveButton.removeAttribute("style");
            imgInput.removeAttribute("style");
            editButton.setAttribute("style", "display: none");
            editElement(e);
        })
    })
    deleteButtons.forEach((element) => {
        element.addEventListener('click', (e) => {
            tableRows = e.target.parentNode.parentNode;
            let fixedId = tableRows.querySelector('#fixedId').innerHTML;
            console.log(fixedId);
            for (i = 0; i < listSV.length; i++) {
                if (listSV[i].id == fixedId) {
                    listSV.splice(i, 1);
                }
            }
            table = tableRows.parentNode;
            console.log(table)
            table.removeChild(tableRows);
            while (table.firstChild) {
                table.removeChild(table.lastChild);
            }
            listSV.forEach(e => {
                createElementInTable(e);
                getDOM();
            })
        })
    })
    saveButtons.forEach((element) => {
        element.addEventListener('click', (e) => {
            var saveButton = e.target.parentNode.querySelector(".btn-warning");
            var editButton = e.target.parentNode.querySelector('.btn-primary');
            var imgInput = e.target.parentNode.parentNode.querySelector('#fixedImgInput');
            // var smallImgPreview = e.target.parentNode.parentNode.querySelector('#fixedImg');
            // console.log(smallImgPreview)
            let tf = saveElement(e);
            if (tf) {
                imgInput.setAttribute("style", "display: none");
                editButton.removeAttribute("style");
                saveButton.setAttribute("style", "display: none");
                tableRows.querySelector('#fixedName').classList.remove('form__invalid');
                tableRows.querySelector('#fixedAge').classList.remove('form__invalid');
            }
        })
    })
}
function editElement(e) {
    for (let i = 1; i <= 2; i++) {
        e.target.parentNode.parentNode.children[i].children[0].removeAttribute('readonly');
    }
    e.target.parentNode.parentNode.children[3].children[0].disabled = false;
}
// function deleteElement(e) {
//     console.log(e.target);
// }
function saveElement(e) {
    tableRows = e.target.parentNode.parentNode;
    // console.log(tableRows.querySelector('#fixedName').value, tableRows.querySelector('#fixedAge').value, tableRows.querySelector('#fixedClass').value, tableRows.querySelector('#fixedImg').src)
    let fixedId = tableRows.querySelector('#fixedId').innerHTML;
    let fixedName = tableRows.querySelector('#fixedName').value;
    let fixedAge = tableRows.querySelector('#fixedAge').value;
    let fixedClass = tableRows.querySelector('#fixedClass').value;
    let fixedImg = tableRows.querySelector('#fixedImg').src;
    filteredValidationList = validateEveryThing(fixedName, fixedClass, fixedAge, fixedImg);
    if (filteredValidationList.length > 0) {
        filteredValidationList.forEach(function (testResult) {
            DOMRender_save(testResult);
        })
        return false;
    }
    for (let i = 1; i <= 2; i++) {
        e.target.parentNode.parentNode.children[i].children[0].setAttribute('readonly', true);
    }
    e.target.parentNode.parentNode.children[3].children[0].disabled = true;
    sv1 = new SV(fixedId, fixedName, fixedAge, fixedClass, fixedImg);
    listSV[fixedId - 1] = sv1;
    return true;
}
function DOMRender_save(testResult) {
    const br = document.createElement("br");
    const element = document.createElement('small');
    element.textContent = testResult.message;
    element.classList.add('errorMessage');
    switch (testResult.field) {
        case 'name':
            tableRows.querySelectorAll('td')[1].querySelectorAll('br').forEach(function (err) {
                err.parentNode.removeChild(err);
            })
            tableRows.querySelector('#fixedName').classList.add('form__invalid');
            tableRows.querySelector('#fixedName').insertAdjacentElement('afterend', element);
            tableRows.querySelector('#fixedName').insertAdjacentElement('afterend', br);
            break;
        case 'age':
            tableRows.querySelectorAll('td')[2].querySelectorAll('br').forEach(function (err) {
                err.parentNode.removeChild(err);
            })
            tableRows.querySelector('#fixedAge').classList.add('form__invalid');
            tableRows.querySelector('#fixedAge').insertAdjacentElement('afterend', element);
            tableRows.querySelector('#fixedAge').insertAdjacentElement('afterend', br);
            break;
        default:
            break;
    }
}

function createElementInTable(s) {
    let newRow =
        `
            <tr>
            <td id="fixedId">${listSV.length}</td>
            <td><input id="fixedName" type="text" readonly value='${s.name}'></td>
            <td><input id="fixedAge" type="number" readonly value='${s.age}'></td>
            <td>
                <select
                    id="fixedClass"
                    name="class"
                    class="form-control"
                    aria-label="Default select example"
                    disabled = "true"
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </td>
            <td>
                <img id="fixedImg" src=${s.img_src} alt="" width=100 height=auto></img>
                <input
                    id = "fixedImgInput"
                    style="display: none"
                    type="file"
                    name="image"
                    class="form-control"
                    accept=".jpeg, .png" 
                />
            </td>
            <td>
                <button class="btn btn-warning" style="display: none">Save</button>
                <button class="btn btn-primary">Edit</button>
                <button class="btn btn-danger">Delete</button>
            </td>
            </tr>
            `
    document.querySelector("tbody").innerHTML += newRow;
    let selects = document.querySelector("tbody").querySelectorAll('select');
    for (let i = 0; i < selects.length; i++) {
        for (let j = 0; j < selects[i].length; j++) {
            if (selects[i].options[j].value == listSV[i].atClass) {
                selects[i].options[j].setAttribute('selected', true);
            }
        }
    }

}
function validateEveryThing(name, atClass, age, img_src) {
    validationsList = [];
    resetDOM();

    validationsList = [
        nameValidator(name),
        classValidator(atClass),
        ageValidator(age),
        imgValidator(img_src),
    ]
    var filteredValidationList = validationsList.filter(function (item) {
        return item !== null;
    })
    return filteredValidationList;
}
signupForm.addEventListener('submit', function (e) {
    e.preventDefault();
    filteredValidationList = validateEveryThing(nameInput.value, classInput.value, ageInput.value, imgInput.value);
    console.log(filteredValidationList);
    if (filteredValidationList.length > 0) {
        filteredValidationList.forEach(function (testResult) {
            DOMRender(testResult);
        })
    } else {
        console.log('SUCCESS');
        console.log({
            name: nameInput.value,
            class: classInput.value,
            age: ageInput.value,
            image: imgInput.value,
        });
        src = document.querySelector('.padding').src;
        sv1 = new SV(null, nameInput.value, ageInput.value, classInput.value, src);
        listSV.push(sv1);
        createElementInTable(sv1);
        getDOM();
        resetValue();
    }
})
var temp_listSV = [];
var temp = [];
window.onbeforeunload = function () {
    localStorage.clear();
    listSV.forEach(e => {
        temp.push(e.name, e.age, e.atClass, e.img_src);
    })
    localStorage.setItem(temp_listSV, temp);
}
window.onload = function () {
    let temp = localStorage.getItem(temp_listSV).split(',');
    console.log(temp.length)
    if (temp[0] != "") {
        for (i = 0; i < temp.length; i += 4) {
            sv1 = new SV(null, temp[i], temp[i + 1], temp[i + 2], temp[i + 3]);
            console.log(sv1);
            listSV.push(sv1);
            createElementInTable(sv1);
            getDOM();
        }
    }
}