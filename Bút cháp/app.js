var allImages = document.querySelectorAll('.header__img');
var allDots = document.querySelectorAll('.header__dot');

var leftArrow = document.querySelector('.header__nav--left');
var rightArrow = document.querySelector('.header__nav--right');

var arrowContainer = document.querySelector('.header__nav');
var rightArrow = document.querySelector('.header__nav--right');
console.log(allImages,allDots,leftArrow,arrowContainer,rightArrow,)
var imageIndex = 2; //2

function activeDotByIndex(index) {
  allDots.forEach(function(dot){
    dot.classList.remove('header__dot--active');
  })
  allDots[index].classList.add('header__dot--active')
}

activeDotByIndex(imageIndex)

function hideAndDisplayImageByIndex(index) {
  allImages.forEach(function(image) {
    image.style.display = 'none';
  })
  
  allImages[index].style.display = 'block';
}

hideAndDisplayImageByIndex(imageIndex)

var interval = setInterval(function() {
  hideAndDisplayImageByIndex(imageIndex);
  activeDotByIndex(imageIndex)
  imageIndex++
  if (imageIndex === allImages.length) {
    imageIndex = 0;
  }
}, 1500);

leftArrow.addEventListener('click', function() {
  clearInterval(interval);
  imageIndex--;
  if (imageIndex < 0) {
    imageIndex = 0
    return;
  }
  hideAndDisplayImageByIndex(imageIndex);
  activeDotByIndex(imageIndex);
})

rightArrow.addEventListener('click', function() {
  clearInterval(interval);
  imageIndex++;
  if (imageIndex >= allImages.length) {
    imageIndex = allImages.length - 1;
    return;
  }
  hideAndDisplayImageByIndex(imageIndex);
  activeDotByIndex(imageIndex);
})

arrowContainer.addEventListener('click', function() {
  if (imageIndex === 0) {
    leftArrow.style.display = 'none'
  } else {
    leftArrow.style.display = 'block'
  }

  if (imageIndex === allImages.length - 1) {
    rightArrow.style.display = 'none'
  } else {
    rightArrow.style.display = 'block'
  }
})
allDots.forEach((dot,index)=>{
  dot.addEventListener('click',function(){
    clearInterval(interval);
    hideAndDisplayImageByIndex(index);
    activeDotByIndex(index);
  })
})