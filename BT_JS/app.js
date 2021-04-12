var btn1 = document.querySelector('.btn1');
var display1 = document.querySelector('.display1');
var btn2 = document.querySelector('.btn2');
var display2 = document.querySelector('.display2');
var btn3 = document.querySelector('.btn3');
var display3 = document.querySelector('.display3');
var input3 = document.querySelector('.input3');
var btn4 = document.querySelector('.btn4');
var display4 = document.querySelector('.display4');
var input4 = document.querySelector('.input4');
var btn5 = document.querySelector('.btn5');
var display5 = document.querySelector('.display5');
var input5 = document.querySelector('.input5');
var btn6 = document.querySelector('.btn6');
var display6 = document.querySelector('.display6');
var input6 = document.querySelector('.input6');
var btn7 = document.querySelector('.btn7');
var display7 = document.querySelector('.display7');
var input7 = document.querySelector('.input7');
var btn8 = document.querySelector('.btn8');
var display8 = document.querySelector('.display8');
var input8 = document.querySelector('.input8');
var btn9 = document.querySelector('.btn9');
var display9 = document.querySelector('.display9');
var input9 = document.querySelector('.input9');
var btn10 = document.querySelector('.btn10');
var display10 = document.querySelector('.display10');
var input10_1 = document.querySelector('.input10-1');
var input10_2 = document.querySelector('.input10-2');

// console.log(btn3,display3,input3);
regCheckIfNumberInString = /\d/;
regCheckWhiteSpace = /^\s/;
regCheckIfAnythingNotNumberInString = /^[a-zA-Z]+$/;

function dateTime() {
    let today = new Date();
    console.log(today.getDate() + '/' + today.getMonth() + '/' + today.getFullYear());
    display1.innerHTML = today.toString();
}
btn1.addEventListener('click', dateTime);

//2
function displayDateAndTime() {
    today = new Date();
    dd = today.getDate();
    mm = today.getMonth() + 1;
    yyyy = today.getFullYear();
    console.log(mm + '-' + dd + '-' + yyyy, mm + '/' + dd + '/' + yyyy, dd + '-' + mm + '-' + yyyy, mm + '/' + dd + '/' + yyyy);
    display2.innerHTML = `<li> ${mm + '-' + dd + '-' + yyyy} </li> <br> ` + `<li> ${mm + '/' + dd + '/' + yyyy} </li> <br> ` + `<li> ${dd + '-' + mm + '-' + yyyy} </li> <br> ` + `<li> ${mm + '/' + dd + '/' + yyyy} </li> <br> `
}
btn2.addEventListener('click', displayDateAndTime);
//3
function checkIncreaseSegment(text) {
    temp = text.toString().split('');
    for (let i = 0; i < temp.length - 1; i++) {
        if (temp[i] < temp[i + 1]) {
            return true;
        }
    }
    return false;
}
btn3.addEventListener('click', () => {
    display3.innerHTML = "";
    text = input3.value
    if (text && !regCheckIfAnythingNotNumberInString.test(text) && !regCheckWhiteSpace.test(text)) display3.innerHTML = checkIncreaseSegment(text);
});
//4
function mapToNextChar(s) {
    s = s
        .split('')
        .map((e) => {
            return String.fromCharCode(e.charCodeAt(0) + 1);
        })
        .join('');
    return s;
}
btn4.addEventListener('click', () => {
    display4.innerHTML = "";
    text = input4.value
    if (text && regCheckIfNumberInString.test(text) && regCheckWhiteSpace.test(text)) display4.innerHTML = mapToNextChar(text);
});
//5
function makeString(s) {
    if (s.length >= 3 && s.length % 2 == 1) {
        return s.slice(s.length / 2 - 1, s.length / 2 + 2);
    }
    else return 'Invalid Input';
}
btn5.addEventListener('click', () => {
    display5.innerHTML = "";
    text = input5.value
    if (text) display5.innerHTML = makeString(text);
});
//6
function checkFrequency(s) {
    arr = s.split(',');
    fre = new Array(10).fill(0);
    cntAns = 0;
    ans = 0;

    arr.forEach(e => {
        fre[e]++;
        if (fre[e] > cntAns) {
            cntAns = fre[e];
            ans = e;
        }
    });
    return ans;
}
btn6.addEventListener('click', () => {
    display6.innerHTML = "";
    text = input6.value
    if (text) display6.innerHTML = checkFrequency(text);
});
//7
function checkIfContainAnString(s) {
    return s.toLowerCase().includes('java');
}
btn7.addEventListener('click', () => {
    display7.innerHTML = "";
    text = input7.value
    if (text) display7.innerHTML = checkIfContainAnString(text);
});
//8
function checkMonth(n) {
    const nameOfMonths = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const d = new Date();
    return nameOfMonths[n - 1];
}
btn8.addEventListener('click', () => {
    display8.innerHTML = "";
    text = Number(input8.value)
    if (text <= 12 && text >= 1) display8.innerHTML = checkMonth(text);
});
//9
function findLongestWord(s) {
    let reg = /\w+/g;
    let ans = '';
    s.match(reg).forEach(e => {
        if (e.length >= ans.length) ans = e;
    });
    return ans;
}
btn9.addEventListener('click', () => {
    display9.innerHTML = "";
    text = input9.value;
    if (text) display9.innerHTML = findLongestWord(text);
});
//10
function displayPrimeNumer(l, r) {
    let isPrime = new Array(r - l + 1).fill(true);
    isPrime[0] = false;
    // isPrime[1] = false;
    for (let i = 2; i * i < r; i++) {
        for (let j = Math.max(i * i, (l + i - 1) / i * i); j <= r; j += i) {
            isPrime[j - l] = false;
        }
    }
    if (1 >= l) isPrime[1 - l] = false;
    let ans = [];
    for (let i = l; i <= r; i++) {
        if (isPrime[i]) ans.push(i + 1);
    }
    return ans;
}
btn10.addEventListener('click', () => {
    display10.innerHTML = "";
    start = Number(input10_1.value);
    end = Number(input10_2.value);
    if (start && end) display10.innerHTML = displayPrimeNumer(start, end);
});
