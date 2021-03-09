var nextBtn = document.querySelector('#right');
var prevBtn = document.querySelector('#left');
nextBtn.addEventListener('click', ()=>{
    var list = document.querySelector('.list_container');
    if (!list.classList.contains('category__forward')) list.classList.add('category__forward')
    else if (!list.classList.contains('category__forward1')) list.classList.add('category__forward1')
    console.log(list.classList);
})
prevBtn.addEventListener('click', ()=>{
    var list = document.querySelector('.list_container');
    if (list.classList.contains('category__forward1')) list.classList.remove('category__forward1')
    else if (list.classList.contains('category__forward')) list.classList.remove('category__forward')
    console.log(list.classList);
})

var nextBtn1 = document.querySelector('#right1');
var prevBtn1 = document.querySelector('#left1');
nextBtn1.addEventListener('click', ()=>{
    var list1 = document.querySelector('.flag');
    if (!list1.classList.contains('category__forward2')) list1.classList.add('category__forward2')
    else if (!list1.classList.contains('category__forward3')) list1.classList.add('category__forward3')
    console.log(list1.classList);
})
prevBtn1.addEventListener('click', ()=>{
    var list1 = document.querySelector('.flag');
    if (list1.classList.contains('category__forward3')) list1.classList.remove('category__forward3')
    else if (list1.classList.contains('category__forward2')) list1.classList.remove('category__forward2')
    console.log(list1.classList);
})