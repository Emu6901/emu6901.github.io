const btn_load = document.querySelector('#btn--load');
btn_load.addEventListener('mouseover', function (e) {
    btn_load.classList.remove('fadeInUp');
}
)
var typed = new Typed('.typed', {
    strings: ["Developers.", "Designers.", "People."],
    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
    stringsElement: null,
    // typing speed
    typeSpeed: 30,
    // time before typing starts
    startDelay: 200,
    // backspacing speed
    backSpeed: 20,
    // time before backspacing
    backDelay: 100,
    // loop
    loop: true,
    // false = infinite
    loopCount: 5,
    // show cursor
    showCursor: false,
    // character for cursor
    cursorChar: "|",
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: "html",
    // call when done callback function
    callback: function () { },
    // starting callback function before each string
    preStringTyped: function () { },
    //callback for every typed string
    onStringTyped: function () { },
    // callback for reset
    resetCallback: function () { }
});

var barButton = document.querySelector(".elementor-menu-toggle");
console.log(barButton)
barButton.addEventListener('click', () => {
    var menuToggle = document.querySelector('.elementor-nav-menu--dropdown');
    menuToggle.style.display == 'none' ? menuToggle.style.display = 'block' : menuToggle.style.display = 'none';
    var headerTitle = document.querySelector('.header__title');
    headerTitle.style.marginTop == '0px'?headerTitle.style.marginTop = '12rem':headerTitle.style.marginTop = '0px';
})
var menuItemHasChildren = document.querySelector(".menu-item-has-children");
menuItemHasChildren.addEventListener('click', () => {
    var subMenu = document.querySelector('.sub-menu');
    subMenu.style.display == 'none' ? subMenu.style.display = 'block' : subMenu.style.display = 'none';
})