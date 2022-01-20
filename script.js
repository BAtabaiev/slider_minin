const upBtn = document.querySelector('.up-button');
const dwnBtn = document.querySelector('.down-button');
const sideBar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length;
const container = document.querySelector('.container');

const audioClick = document.createElement('audio');
audioClick.src = 'click.mp3'

const audioFlip = document.createElement('audio');
audioFlip.src = 'flip.mp3'

let activeSlideIndex = 0;

sideBar.style.top = `-${(slidesCount-1)*100}vh`;

upBtn.addEventListener('click', () => {
    changeSlide('up');
    audioClick.play();
})

dwnBtn.addEventListener('click', () => {
    changeSlide('down');
    audioClick.play();
})


function changeSlide(direction) {
  if(direction === 'up') {
      activeSlideIndex++
      if (activeSlideIndex === slidesCount) {
          activeSlideIndex = 0;
          audioFlip.play();

      }
  } else if (direction === 'down') {
      activeSlideIndex--
      if (activeSlideIndex < 0){
          activeSlideIndex = slidesCount - 1;
          audioFlip.play();
      }
  }
  const height = container.clientHeight;


  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
  sideBar.style.transform = `translateY(${activeSlideIndex * height}px)`;
  
}
